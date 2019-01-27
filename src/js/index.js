/* standard returns */
function bySel(x) { return document.querySelector(x) };
function byId(x) { return document.getElementById(x) };
function byClass(x) { return document.getElementsByClassName(x) };
function bySelAll(x) { return document.querySelectorAll(x) };
function deleteThis(x) { return x.remove() };
function makeFull(x) {return x.className = x.className + "_full" };
function takeFull(x) { var y,z; return y = x.className.split('_full'), z = y[0], x.className = z };
function createEle(x) { return document.createElement(x) };
function byTag(x, y) { if (!y || y === null) {y = 0}  return document.getElementsByTagName(x)[y] };
function makeLock(x) { return x.className = x.className + "_locked" };
function takeLock(x) { var y, z; return y = x.className.split("_locked"), z = y[0], x.className = z };

/* localStorage returns */
var ts = Math.round(new Date().getTime()/1000);
var basicUser = {
    health: 100,
    manna: 5,
    life: 1,
    power: 1,
    speed: 1,
    acc: 1,
    intel: 1,
    defense: 1,
    gBool: false,
    tStamp: ts,
    level: 1

};

function saveLS(x, y) { return localStorage.setItem(x, JSON.stringify(y)) };
function loadLS(x) { return localStorage.getItem(x) };
function clearLS() { return localStorage.clear() };
function removeLSitem(x) { return localStorage.removeItem(x) };/*untested*/
function LSinit(x,y) {
	clearLS();
	var keyname = localStorage.getItem(x);
	if (!keyname || keyname === null) {
		var p;
		if (y === "basicUser") {
            p = basicUser;
		} else {
            p = y;
		}
	    localStorage.setItem(x, JSON.stringify(p));
	};

	var z = localStorage.getItem(keyname);

	if (z) {

		var a = JSON.parse(z);
	}; 

	return console.log(z), console.log(a);
};