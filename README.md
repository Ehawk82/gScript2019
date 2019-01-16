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

<div>bySel: get elements by query selector<blockquote >[object].bySel(x);</blockquote ></div>
<div>byId: get elements by id<blockquote >[object].byId(x);</blockquote ></div>
<div>byClass: get elements by class name<blockquote >[object].byClass(x);</blockquote ></div>
<div>bySelAll: get all elements by query selector<blockquote >[object].bySelAll(x);</blockquote ></div>
<div>deleteThis: delete the element<blockquote >[object].deleteThis(x);</blockquote ></div>
<div>makeFull: add "_full" to class name<blockquote >[object].makeFull(x);</blockquote ></div>
<div>takeFull: remove "_full" from class name<blockquote >[object].takeFull(x);</blockquote ></div>
<div>createEle: create a mew element<blockquote >[object].createEle(x);</blockquote ></div>
<div>byTag: get elements by tag name<blockquote >[object].byTag(x,y);</blockquote ></div>
<div>saveLS: save and stringify the local storage item<blockquote >[object].saveLS(x,y);</blockquote ></div>
<div>loadLS: load a local storage item<blockquote >[object].loadLS(x);</blockquote ></div>
<div>clearLS: clear the local storage<blockquote >[object].clearLS(x);</blockquote ></div>
<div>removeLSitem: remove a specific item from local storage<blockquote >[object].removeLSitem(x);</blockquote ></div>

____
<h2>3: Notes<h2>

<sup>1</sup> takeFull and makeFull will add/remove the string "\_full" on the class the className.  CSS transitions are required to custimize effects

