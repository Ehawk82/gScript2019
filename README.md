# gScript2019 
____

a library specified to the code habits of Ehawk LLC
<h1>TABLE OF CONTENTS</h1>

<h4>1: Features</h4>
<h4>2: Function Names</h4>
<h4>3: Notes</h4>

____

<h2>1: Features</h2>

- creating and removing nodes.
- toggle class name "full" <sup>1</sup>
- access to localStorage API

____
<h2>2: Function Names</h2>

<div><details><summary>bySel</summary><p>get elements by query selector</p><code>[object].bySel(x);</code></details></div>

<div><details><summary>byId</summary><p>get elements by id</p><code>[object].byId(x);</code></details></div>

<div><details><summary>byClass</summary><p>get elements by class name</p><code>[object].byClass(x);</code></details></div>

<div><details><summary>bySelAll</summary><p>get all elements by query selector</p><code>[object].bySelAll(x);</code></details></div>

<div><details><summary>deleteThis</summary><p>delete the element</p><code>[object].deleteThis(x);</code></details></div>

<div><details><summary>makeFull</summary><p>add "_full" to class name</p><code>[object].makeFull(x);</code></details></div>

<div><details><summary>takeFull</summary><p>remove "_full" from class name</p><code>[object].takeFull(x);</code></details></div>

<div><details><summary>createEle</summary><p>create a mew element</p><code>[object].createEle(x);</code></details></div>

<div><details><summary>byTag</summary><p>get elements by tag name</p><code>[object].byTag(x,y);</code></details></div>

<div><details><summary>saveLS</summary><p>save and stringify the local storage item</p><code>[object].saveLS(x,y);</p></details></div>

<div><details><summary>loadLS</summary><p>load a local storage item</p><code>[object].loadLS(x);</code></details></div>

<div><details><summary>clearLS</summary><p>clear the local storage</p><code>[object].clearLS(x);</code></details></div>
	
<div><details><summary>removeLSitem</summary><p>remove a specific item from local storage</p><code>[object].removeLSitem(x);</code></details></div>

____
<h2>3: Notes</h2>

<sup>1</sup> takeFull and makeFull will add/remove the string "\_full" on the class the className.  CSS transitions are required to custimize effects

