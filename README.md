# gScript2019 
____

a library specified to the code habits of Ehawk LLC
<h1>TABLE OF CONTENTS</h1>

<h4>1: Features<h4>
<h4>2: Function Names<h4>
<h4>3: Notes<h4>

____

<h2>1: Features<h2>

- creating and removing nodes.
- toggle class name "full" <sup>1</sup>
- access to localStorage API

____
<h2>2: Function Names<h2>

<div>bySel: get elements by query selector<details><summary>usage</summary><p>[object].bySel(x);</p></details></div>

<div>byId: get elements by id<details><summary>usage</summary><p>[object].byId(x);</p></details></div>

<div>byClass: get elements by class name<details><summary>usage</summary><p>[object].byClass(x);</p></details></div>

<div>bySelAll: get all elements by query selector<details><summary>usage</summary><p>[object].bySelAll(x);</p></details></div>

<div>deleteThis: delete the element<details><summary>usage</summary><p>[object].deleteThis(x);</p></details></div>

<div>makeFull: add "_full" to class name<details><summary>usage</summary><p>[object].makeFull(x);</p></details></div>

<div>takeFull: remove "_full" from class name<details><summary>usage</summary><p>[object].takeFull(x);</p></details></div>

<div>createEle: create a mew element<details><summary>usage</summary><p>[object].createEle(x);</p></details></div>

<div>byTag: get elements by tag name<details><summary>usage</summary><p>[object].byTag(x,y);</p></details></div>

<div>saveLS: save and stringify the local storage item<details><summary>usage</summary><p>[object].saveLS(x,y);</p></details></div>

<div>loadLS: load a local storage item<details><summary>usage</summary><p>[object].loadLS(x);</p></details></div>

<div>clearLS: clear the local storage<details><summary>usage</summary><p>[object].clearLS(x);</p></details></div>
	
<div>removeLSitem: remove a specific item from local storage<details><summary>usage</summary><p>[object].removeLSitem(x);</p></details></div>

____
<h2>3: Notes<h2>

<sup>1</sup> takeFull and makeFull will add/remove the string "\_full" on the class the className.  CSS transitions are required to custimize effects

