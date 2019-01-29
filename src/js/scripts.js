var myUI = {
    init: () => {
    	//clearLS();
        myUI.loadout();
    },
    loadout: () => {
        var holder = createEle("div"),
            lsLabel = createEle("div"),
            lsBonusLabel1 = createEle("div"),
            lsLabel2 = createEle("div"),
            lsTitle1 = createEle("div"),
            keyIn = createEle("input"),
            itemIn = createEle("input"),
            initButton = createEle("button"),
            txBox = createEle("textarea"),
            lsObject = "", lslabelToggle1 = createEle("div"),
            br1 = createEle("br"),
            clearAllBtn = createEle("button"), lsWarn =createEle("div");

        if (localStorage.length === 0) {
        	lsObject = " - there is no data in your localStorage - ";
        	lslabelToggle1.innerHTML = "2. 🔒";

        	clearAllBtn.disabled = true;
        	lsWarn.style.color = "transparent";
        	lsWarn.innerHTML = "<span class='spnHiLite' style='opacity:0;'>*WARNING*</span><span class='spnCode' style='opacity:0;'>clearLS();</span>takes no params and will clear ALL storage.  Be sure you want to do this before hand. It may be a good idea to alert users if you plan on putting this function on an application";
        } else {
        	for ( var i = 0, len = localStorage.length; i < len; ++i ) {
            lsObject += "[" + localStorage.key( i ) + "][" + localStorage.getItem( localStorage.key( i ) ) + "] - ";
            lslabelToggle1.innerHTML = "2. Loading, saving, updating -made easy";

        	clearAllBtn.disabled = false;
        	lsWarn.style.color = "black";
         lsWarn.innerHTML = "<span class='spnHiLite'>*WARNING*</span><span class='spnCode'>clearLS();</span>takes no params and will clear ALL storage.  Be sure you want to do this before hand. It may be a good idea to alert users if you plan on putting this function on an application";
            }
        }
            

        clearAllBtn.innerHTML = "Clear All";
        clearAllBtn.className = "clearAllBtn";
        clearAllBtn.onclick = () => { clearLS(); location.reload(); };

        txBox.readOnly = true;
        txBox.className = "txBox";
        txBox.value = lsObject;
        
        itemIn.type = "text";
        itemIn.placeholder = "items";
        itemIn.className = "ins";

        keyIn.type = "text";
        keyIn.placeholder = "key name";
        keyIn.className = "ins";

        initButton.innerHTML = " LSinit(key, item) ";
        initButton.disabled = true;
        initButton.className = "initButton"
        
        lsTitle1.innerHTML = "1. Initializing localStorage";
        lsTitle1.className = "labels";

        lsLabel.innerHTML = "To use this demo with the localStorage functions, start by initializing the object. <br />&nbsp;<br /> The <span class='spnCode'>LSinit(key,item);</span> function will take two params, the keyname, and the string or JSON object The text area shows what is in your localStorage.";
        lsLabel.className = "labels";
        
        lsBonusLabel1.innerHTML = "<span class='spnHiLite'> RESERVED ITEM NAMES </span> <br /><h4>Place any of the following names as a string in the item input to generate a template JSON array</h4><br /><span class='spnCode'>basicUser</span><span class='spnCode'>midUser</span><span class='spnCode'>hiUser</span><br/>&nbsp;<br />(TRY ONE)";
        lsBonusLabel1.className = "labels";

        lslabelToggle1.className = "labels"

        lsLabel2.append(lsWarn);
        lsLabel2.className = "labels";

        holder.className = "holder";
        holder.append(lsTitle1);
        holder.append(lsLabel);
        holder.append(lsBonusLabel1);
        holder.append(keyIn);
        holder.append(itemIn);
        holder.append(initButton);
        holder.append(br1);
        holder.append(txBox);
        holder.append(lslabelToggle1);
        holder.append(lsLabel2);
        holder.append(clearAllBtn);



        demo.append(holder);
        myUI.makeHolder2(holder);
        
        keyIn.addEventListener('keyup', myUI.takeInput(keyIn, itemIn, initButton, txBox));
        itemIn.addEventListener('keyup', myUI.takeInput(keyIn, itemIn, initButton, txBox));
    },
    takeInput: (keyIn, itemIn, initButton, txBox) => {
    	return () => {
    		if (keyIn.value != "" && itemIn.value != "") {
                initButton.disabled = false;
                initButton.onclick = () => { return LSinit(keyIn.value, itemIn.value), location.reload() };
                
    		} else {
    			initButton.disabled = true;
                initButton.onclick = null;
    		}
    	};
    },
    makeHolder2: () => {
    	var holder2 = createEle("div"),
    	    lsLabel3 = createEle("div"), ls3Text = "",
    	    loadBtn = createEle("button"), loadLStoggle = "",
    	    lsLoadIn = createEle("input");
        
        lsLoadIn.type = "text";
        lsLoadIn.placeholder = "key name";
        lsLoadIn.className = "ins2";
        
        if (localStorage.length === 0) {
             ls3Text = "3. 🔒";
             loadLStoggle = "loadLS(key)";
             loadBtn.disabled = true;
             lsLoadIn.readOnly = true;
             lsLoadIn.style.cursor = "default";

        } else {
             ls3Text = "3. Using the localStorage";
             loadLStoggle = "loadLS(key)";
             //loadBtn.disabled = true;
             lsLoadIn.readOnly = false;
             
        }
        
        loadBtn.innerHTML = loadLStoggle;
        loadBtn.className = "loadBtn";
        

        lsLabel3.innerHTML = ls3Text;
        lsLabel3.className = "labels";
        lsLabel3.id = "lsLabel3";

    	holder2.className = "holder2";
    	holder2.append(lsLabel3);
    	

        holder2.append(lsLoadIn);
        holder2.append(loadBtn);
    	demo.append(holder2);

    	myUI.makeHolder3();
    },
    makeHolder3: () => {
    	var holder3 = createEle("div"),
    	    lsLabel4 = createEle("div");
    	    


        lsLabel4.innerHTML = "&nbsp;";


    	holder3.className = "holder3";
    	holder3.append(lsLabel4);


    	demo.append(holder3);
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