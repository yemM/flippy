Flippy jQuery Plugin
====================

Demo
----
[view the Demo](http://guilhemmarty.com/flippy/)

Features
--------
  * Use CSS3 transform option when the browser supports it
  * Animate multiple element simultaneously
  * Revert the last flip animation with $('#myElement').flippyReverse();
  * Multiple callback on start, half way, during the animation and when finished
  * Flip content without breaking event bindings

Options
-------

  * color_target : The targeted background color. (ex.: ‘aliceblue’, ‘#f0f8ff’ or rgba(33,133,197,.3) | default: ‘white’)
  * content (deprecated please now use verso option) : The content to show after the flip effect, HTML or jQuery objects
  * recto : The content to show after a revert() action (default : the original content)
  * verso : The content to show after the flip effect
  * direction : The direction of the flip effect (‘RIGHT’, ‘LEFT’, ‘BOTTOM’, ‘TOP’ | default : ‘LEFT’)
  * duration : How long the flip effect is during in ms (default : 300)
  * depth : You can adjust the perspective effect (default : 0.12)
  * light : You can adjust light and shadow intensity (default : 60)
  * noCSS : You can force Flippy to NOT use CSS3 properties even if the browser support it (default : false)
  * noRemove: You can prevent Flippy from injecting and removing dom elements, instead use css to show/hide (default : false)
  * backhtml: Use to inject content into the flipbox even when noRemove is true
  * onStart : The function triggered before the animation start
  * onMidway : The function triggered at half animation
  * onAnimation : The function triggered each time the Flippy is refreshed
  * onFinish : The function triggered after the animation finish
  * onReverseStart : The function triggered before the animation start
  * onReverseMidway : The function triggered at half animation
  * onReverseAnimation : The function triggered each time the Flippy is refreshed
  * onReverseFinish : The function triggered after the animation finish

Markup
------

``` html
<div class="flipbox-container">

    <div id="myFlippyBox">
        <span>Hello !</span>
    </div>

</div>
```

Example
--------

``` javascript
$("#myFlippyBox").flippy({
	verso:"Hi !",
	direction:"TOP",
	duration:"750",
	onStart:function(){
		alert("Let's flip");
	},
	onFinish:function(){
		alert("ok, it's flipped :)");
	}
});

// If you want to revert the last animation
$("#myFlippyBox").flippyReverse();
```
Example noRemove
--------

Setting noRemove to true prevents Flippy from injecting elements into the DOM as well as using remove. This is useful for elements with event bindings that can be lost when removed from the DOM.

When using noRemove, verso and recto have different purposes. Instead of holding the content to inject into the DOM, verso and recto represent a selector of the content to be flipped to and the currently displayed content.

  * noRemove : Set to true to use noRemove instead of normal inject/remove Flippy
  * verso : Selector of the content to flip to
  * recto : Selector of the currently displayed content (used for flippyReverse)
  * backhtml : Use to inject content into the flipbox even when noRemove is true

If the element that verso points to exists already, backhtml does not re-inject content.

``` javascript
$("#myFlippyBox").flippy({
  verso:"#backSide",
  recto:"#frontSide",
  backhtml: "<div id='backSide'>Hello</div>"
  noRemove: true,
  direction:"TOP",
  duration:"750",
  onStart:function(){
    alert("Let's flip");
  },
  onFinish:function(){
    alert("ok, it's flipped :)");
  }
});

// If you want to revert the last animation
$("#myFlippyBox").flippyReverse();
```

Licence
-------
Released under the [MIT license](http://www.opensource.org/licenses/MIT)