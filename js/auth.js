import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  serverTimestamp,
  writeBatch,
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCPPKxpTf0zWU1PzLzbh_8hwF6iDBipE6U",
  authDomain: "cp-blog-378a3.firebaseapp.com",
  projectId: "cp-blog-378a3",
  storageBucket: "cp-blog-378a3.firebasestorage.app",
  messagingSenderId: "396646115296",
  appId: "1:396646115296:web:fb934d0da317f9ed126d85",
  measurementId: "G-QG071933X5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

function getFriendlyError(code) {
  const errors = {
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
    'auth/popup-closed-by-user': 'Sign-in was cancelled.',
    'auth/network-request-failed': 'Network error. Check your connection.',
  };
  return errors[code] || 'Something went wrong. Please try again.';
}

async function syncUserProfile(firebaseUser) {
  const ref = doc(db, 'users', firebaseUser.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
      email: firebaseUser.email,
      role: 'user',
      joined: serverTimestamp(),
      email_notifications: true,
    });
    STATE.user = {
      uid: firebaseUser.uid,
      name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
      email: firebaseUser.email,
      role: 'user',
    };
  } else {
    const data = snap.data();
    STATE.user = {
      uid: firebaseUser.uid,
      name: data.name,
      email: data.email,
      role: data.role,
    };
  }
}

async function loadUserProgress() {
  const progressRef = collection(db, 'users', STATE.user.uid, 'progress');
  const snap = await getDocs(progressRef);
  STATE.progress = {};
  snap.forEach(d => {
    STATE.progress[d.id] = d.data().status;
  });
}

async function saveTutorialProgress(id, status) {
  if (!STATE.user) return;
  const ref = doc(db, 'users', STATE.user.uid, 'progress', id);
  if (status === null) {
    const { deleteDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    await deleteDoc(ref);
    delete STATE.progress[id];
  } else {
    await setDoc(ref, { status, updatedAt: serverTimestamp() });
    STATE.progress[id] = status;
  }
}

function initAuthListener() {
  onAuthStateChanged(auth, async firebaseUser => {
    if (firebaseUser) {
      await syncUserProfile(firebaseUser);
      await loadUserProgress();
      hideAuthOverlay();
      initApp();
    } else {
      STATE.user = null;
      STATE.progress = {};
      showAuthOverlay();
    }
  });
}

async function doLogin(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

async function doRegister(name, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
}

async function doGoogleSignIn() {
  await signInWithPopup(auth, googleProvider);
}

async function doLogout() {
  await signOut(auth);
  showPage('home');
}

function showAuthOverlay() {
  document.getElementById('auth-overlay').classList.remove('hidden');
}

function hideAuthOverlay() {
  document.getElementById('auth-overlay').classList.add('hidden');
}

window.doLogin = doLogin;
window.doRegister = doRegister;
window.doGoogleSignIn = doGoogleSignIn;
window.doLogout = doLogout;
window.saveTutorialProgress = saveTutorialProgress;
window.getFriendlyError = getFriendlyError;
window.initAuthListener = initAuthListener;

export { db, auth };