function bySel(x) { return document.querySelector(x) };
function byId(x) { return document.getElementById(x) };
function byClass(x) { return document.getElementsByClassName(x) };
function bySelAll(x) { return document.querySelectorAll(x) };
function deleteThis(x) { return x.remove() };
function makeFull(x) {return x.className = x + "_full" };
function takeFull(x) { var y,z; return y = x.className.split('_full'), z = y[0], x.className = z };

module.exports = { bySel: bySel, byElementId: byId };