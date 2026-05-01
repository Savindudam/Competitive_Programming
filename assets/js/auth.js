import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  collection,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey:            "AIzaSyCPPKxpTf0zWU1PzLzbh_8hwF6iDBipE6U",
  authDomain:        "cp-blog-378a3.firebaseapp.com",
  projectId:         "cp-blog-378a3",
  storageBucket:     "cp-blog-378a3.firebasestorage.app",
  messagingSenderId: "396646115296",
  appId:             "1:396646115296:web:fb934d0da317f9ed126d85",
  measurementId:     "G-QG071933X5"
};

const app            = initializeApp(firebaseConfig);
const auth           = getAuth(app);
const db             = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

window.switchAuthTab = function(tab, btn) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('auth-login').classList.add('hidden');
  document.getElementById('auth-register').classList.add('hidden');
  document.getElementById('auth-' + tab).classList.remove('hidden');
  btn.classList.add('active');
};

async function syncUserProfile(firebaseUser) {
  const ref  = doc(db, 'users', firebaseUser.uid);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    STATE.user = { uid: firebaseUser.uid, ...snap.data() };
  } else {
    const profile = {
      name:                firebaseUser.displayName || firebaseUser.email.split('@')[0],
      email:               firebaseUser.email,
      role:                'user',
      joined:              serverTimestamp(),
      email_notifications: true
    };
    await setDoc(ref, profile);
    STATE.user = { uid: firebaseUser.uid, ...profile };
  }

  await loadUserProgress(firebaseUser.uid);
}
async function loadUserProgress(uid) {
  const snap = await getDocs(collection(db, 'users', uid, 'progress'));
  STATE.progress = {};
  snap.forEach(d => { STATE.progress[d.id] = d.data().status; });
}

window.saveTutorialProgress = async function(tutorialId, status) {
  if (!STATE.user) return;
  const ref = doc(db, 'users', STATE.user.uid, 'progress', tutorialId);
  if (status === null) {
    await deleteDoc(ref);
    delete STATE.progress[tutorialId];
  } else {
    await setDoc(ref, { status, updatedAt: serverTimestamp() });
    STATE.progress[tutorialId] = status;
  }
};
window.doLogin = async function() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  const err   = document.getElementById('login-error');
  err.textContent = '';

  if (!email || !pass) { err.textContent = 'Please fill in all fields.'; return; }

  try {
    const cred = await signInWithEmailAndPassword(auth, email, pass);
    await syncUserProfile(cred.user);
    onAuthSuccess();
  } catch (e) {
    err.textContent = friendlyError(e.code);
  }
};

window.doRegister = async function() {
  const name  = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass  = document.getElementById('reg-pass').value;
  const err   = document.getElementById('reg-error');
  err.textContent = '';

  if (!name || !email || !pass) { err.textContent = 'Please fill in all fields.'; return; }
  if (pass.length < 6)          { err.textContent = 'Password must be at least 6 characters.'; return; }

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    await updateProfile(cred.user, { displayName: name });
    await syncUserProfile(cred.user);
    onAuthSuccess();
  } catch (e) {
    err.textContent = friendlyError(e.code);
  }
};

window.doGoogleSignIn = async function() {
  const err = document.getElementById('login-error');
  err.textContent = '';
  try {
    const cred = await signInWithPopup(auth, googleProvider);
    await syncUserProfile(cred.user);
    onAuthSuccess();
  } catch (e) {
    if (e.code !== 'auth/popup-closed-by-user') {
      err.textContent = friendlyError(e.code);
    }
  }
};
window.doLogout = async function() {
  await signOut(auth);
  STATE.user     = null;
  STATE.progress = {};
  document.getElementById('auth-overlay').style.display = 'flex';
  document.getElementById('app').style.display          = 'none';
};

window.initAuthListener = function() {
  onAuthStateChanged(auth, async firebaseUser => {
    if (firebaseUser) {
      await syncUserProfile(firebaseUser);
      document.getElementById('auth-overlay').style.display = 'none';
      document.getElementById('app').style.display          = 'flex';
      syncSettingsUI();
      if (typeof loadState  === 'function') loadState();
      if (typeof initApp    === 'function') initApp();
    } else {
      document.getElementById('auth-overlay').style.display = 'flex';
      document.getElementById('app').style.display          = 'none';
    }
  });
};
function onAuthSuccess() {
  document.getElementById("auth-overlay").style.display = "none";
  document.getElementById("app").style.display          = "flex";
  syncSettingsUI();
  if (typeof loadState === "function") loadState();
  if (typeof initApp   === "function") initApp();
}

function syncSettingsUI() {
  var tog = document.getElementById("tog-email");
  if (!tog || !STATE.user) return;
  if (STATE.user.email_notifications) { tog.classList.add("on"); }
  else { tog.classList.remove("on"); }
}

window.toggleSetting = async function(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle("on");
  if (id === "tog-email" && STATE.user) {
    var newVal = el.classList.contains("on");
    STATE.user.email_notifications = newVal;
    try {
      var ref = doc(db, "users", STATE.user.uid);
      await setDoc(ref, { email_notifications: newVal }, { merge: true });
    } catch (e) { console.error("Failed to save preference:", e); }
  }
};
function friendlyError(code) {
  return ({
    'auth/invalid-email':          "That doesn't look like a valid email.",
    'auth/user-not-found':         'No account found with that email.',
    'auth/wrong-password':         'Incorrect password.',
    'auth/invalid-credential':     'Invalid email or password.',
    'auth/email-already-in-use':   'An account with that email already exists.',
    'auth/weak-password':          'Password must be at least 6 characters.',
    'auth/too-many-requests':      'Too many attempts — try again in a minute.',
    'auth/network-request-failed': 'Network error. Check your connection.',
  })[code] || 'Something went wrong. Please try again.';
}
initAuthListener();