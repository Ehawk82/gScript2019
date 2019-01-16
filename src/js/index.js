function bySel(x) { return document.querySelector(x) };
function byId(x) { return document.getElementById(x) };
function byClass(x) { return document.getElementsByClassName(x) };
function bySelAll(x) { return document.querySelectorAll(x) };
function deleteThis(x) { return x.remove() };
function makeFull(x) {return x.className = x + "_full" };
function takeFull(x) { var y,z; return y = x.className.split('_full'), z = y[0], x.className = z };
function createEle(x) { return document.createElement(x) };
function byTag(x, y) { if (!y || y === null) {y = 0}  return docuSment.getElementsByTagName(x)[y] };
function saveLS(x, y) { return localStorage.saveItem(x, JSON.stringify(y)) };
function loadLS(x) { return localStorage.getItem(x) };
function clearLS() { return localStorage.clear() };
function removeLSitem(x) { return localStorage.removeItem(x) };

module.exports = { bySel: bySel, byId: byId, byClass: byClass, 
	               bySelAll: bySelAll, deleteThis: deleteThis, 
	               makeFull: makeFull, takeFull: takeFull, 
	               createEle: createEle, byTag: byTag,
	               saveLS: saveLS, loadLS: loadLS, 
	               clearLS: clearLS, removeLSitem: removeLSitem };