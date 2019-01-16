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

<div>bySel: get elements by query selector<h6>[object].bySel(x);</h6></div>
<div>byId: get elements by id<h6>[object].byId(x);</h6></div>
<div>byClass: get elements by class name<h6>[object].byClass(x);</h6></div>
<div>bySelAll: get all elements by query selector<h6>[object].bySelAll(x);</h6></div>
<div>deleteThis: delete the element<h6>[object].deleteThis(x);</h6></div>
<div>makeFull: add "_full" to class name<h6>[object].makeFull(x);</h6></div>
<div>takeFull: remove "_full" from class name<h6>[object].takeFull(x);</h6></div>
<div>createEle: create a mew element<h6>[object].createEle(x);</h6></div>
<div>byTag: get elements by tag name<h6>[object].byTag(x,y);</h6></div>
<div>saveLS: save and stringify the local storage item<h6>[object].saveLS(x,y);</h6></div>
<div>loadLS: load a local storage item<h6>[object].loadLS(x);</h6></div>
<div>clearLS: clear the local storage<h6>[object].clearLS(x);</h6></div>
<div>removeLSitem: remove a specific item from local storage<h6>[object].removeLSitem(x);</h6></div>

____
<h2>3: Notes<h2>

<sup>1</sup> takeFull and makeFull will add/remove the string "\_full" on the class the className.  CSS transitions are required to custimize effects

