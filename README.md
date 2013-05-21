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

Licence
-------
Released under the [MIT license](http://www.opensource.org/licenses/MIT)