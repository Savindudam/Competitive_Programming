const STATE = {
  user: null,
  tutorials: [],
  progress: {},
  filters: {
    search: '',
    category: '',
    level: '',
  },
};

function isCompleted(id) {
  return STATE.progress[id] === 'done';
}

function isSaved(id) {
  return STATE.progress[id] === 'saved';
}

function isInProgress(id) {
  return STATE.progress[id] === 'in-progress';
}

function getCompleted() {
  return Object.keys(STATE.progress).filter(id => STATE.progress[id] === 'done');
}

function getSaved() {
  return Object.keys(STATE.progress).filter(id => STATE.progress[id] === 'saved');
}

function getInProgress() {
  return Object.keys(STATE.progress).filter(id => STATE.progress[id] === 'in-progress');
}

function loadState() {}

function saveState() {}