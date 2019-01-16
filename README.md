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

<div>bySel: get elements by query selector<samp>[object].bySel(x);</samp></div>
<div>byId: get elements by id<samp>[object].byId(x);</samp></div>
<div>byClass: get elements by class name<samp>[object].byClass(x);</samp></div>
<div>bySelAll: get all elements by query selector<samp>[object].bySelAll(x);</samp></div>
<div>deleteThis: delete the element<samp>[object].deleteThis(x);</samp></div>
<div>makeFull: add "_full" to class name<samp>[object].makeFull(x);</samp></div>
<div>takeFull: remove "_full" from class name<samp>[object].takeFull(x);</samp></div>
<div>createEle: create a mew element<samp>[object].createEle(x);</samp></div>
<div>byTag: get elements by tag name<samp>[object].byTag(x,y);</samp></div>
<div>saveLS: save and stringify the local storage item<samp>[object].saveLS(x,y);</samp></div>
<div>loadLS: load a local storage item<samp>[object].loadLS(x);</samp></div>
<div>clearLS: clear the local storage<samp>[object].clearLS(x);</samp></div>
<div>removeLSitem: remove a specific item from local storage<samp>[object].removeLSitem(x);</samp></div>

____
<h2>3: Notes<h2>

<sup>1</sup> takeFull and makeFull will add/remove the string "\_full" on the class the className.  CSS transitions are required to custimize effects

