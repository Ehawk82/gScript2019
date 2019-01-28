var myUI = {
    init: () => {
    	//clearLS();
        myUI.loadout();
    },
    loadout: () => {
        var holder = createEle("div"),
            keyIn = createEle("input"),
            itemIn = createEle("input"),
            initButton = createEle("button"),
            txBox = createEle("textarea"),
            br = createEle("br"), lsObject ="";

        if (localStorage.length === 0) {
        	lsObject = " there is no data in your localStorage";
        } else {
        	for ( var i = 0, len = localStorage.length; i < len; ++i ) {
            lsObject += "[" + localStorage.key( i ) + "] = " + localStorage.getItem( localStorage.key( i ) ) + " - ";
            }
        	
        }
        txBox.readOnly = true;
        txBox.className = "txBox";
        txBox.value = lsObject;
        
        itemIn.type = "text";
        itemIn.placeholder = "items";
        itemIn.className = "ins";

        keyIn.type = "text";
        keyIn.placeholder = "key name";
        keyIn.className = "ins";

        initButton.innerHTML = " LSinit() ";
        initButton.disabled = true;

        holder.innerHTML = "&nbsp;";
        holder.className = "holder";
        holder.append(keyIn);
        holder.append(itemIn);
        holder.append(initButton);
        holder.append(br);
        holder.append(txBox);

        demo.innerHTML = "<h1>The gScript DEMO page</h1>";

        demo.append(holder);

        keyIn.addEventListener('keyup', myUI.takeInput(keyIn, itemIn, initButton, txBox));
        itemIn.addEventListener('keyup', myUI.takeInput(keyIn, itemIn, initButton, txBox));
    },
    takeInput: (keyIn, itemIn, initButton, txBox) => {
    	return () => {
    		if (keyIn.value != "" && itemIn.value != "") {
                initButton.disabled = false;
                initButton.onclick = () => { return LSinit(keyIn.value, itemIn.value), location.reload() };
                
    		}
    	};
    }
};

window.onload = () => { myUI.init(); };

/*

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

var midUser = {
    health: 100,
    manna: 15,
    life: 2,
    power: 2,
    speed: 2,
    acc: 2,
    intel: 2,
    defense: 21,
    gBool: false,
    tStamp: ts,
    level: 2

};

function saveLS(x, y) { return localStorage.setItem(x, JSON.stringify(y)) };
function loadLS(x) { return localStorage.getItem(x) };
function parseLS(x) { var y = loadLS(x), z = JSON.parse(y); return z };
function clearLS() { return localStorage.clear() };
function removeLSitem(x) { return localStorage.removeItem(x) };
function LSinit(x,y) {
	var keyname = localStorage.getItem(x);
	if (!keyname || keyname === null) {
		var p;
		if (y === "basicUser") {
            p = basicUser;
		} else if (y === "midUser") {
            p = midUser;
		} else {
            p = y;
		}
	    localStorage.setItem(x, JSON.stringify(p));
	};
};
*/