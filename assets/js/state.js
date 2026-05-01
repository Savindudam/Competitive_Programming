window.STATE = {
  user:            null,
  tutorials:       [],
  progress:        {},  
  levelFilter:     'All',
  currentDetailId: null,
  previousPage:    'tutorials'
};

window.isCompleted  = function(id) { return STATE.progress[id] === 'done'; };
window.isSaved      = function(id) { return STATE.progress[id] === 'saved'; };
window.isInProgress = function(id) { return STATE.progress[id] === 'in-progress'; };

window.getCompleted  = function() { return Object.keys(STATE.progress).filter(function(id) { return STATE.progress[id] === 'done'; }); };
window.getSaved      = function() { return Object.keys(STATE.progress).filter(function(id) { return STATE.progress[id] === 'saved'; }); };
window.getInProgress = function() { return Object.keys(STATE.progress).filter(function(id) { return STATE.progress[id] === 'in-progress'; }); };

window.loadState = function() {};
window.saveState = function() {};