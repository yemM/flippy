What is Flippy ?
----------------
Flippy is a cross-browser flip effect plugin for jQuery which allows you to flip whatever html element you want.

Options
-------

  * color_target : The targeted background color. (ex.: ‘aliceblue’, ‘#f0f8ff’ or rgba(33,133,197,.3) | default: ‘white’)
  * content : The content to show after the flip effect, HTML or jQuery objects.
  * direction : The direction of the flip effect (‘RIGHT’, ‘LEFT’, ‘BOTTOM’, ‘TOP’ | default : ‘LEFT’)
  * duration : How long the flip effect is during in ms (default : 300).
  * depth : You can adjust the perspective effect (default : 0.12).
  * light : You can adjust light and shadow intensity (default : 60).
  * onStart : The function triggered before the animation start.
  * onMidway : The function triggered at half animation.
  * onFinish : The function triggered after the animation finish.

Example
--------

``` javascript
$("#myFlippyBox").flippy({
	content:"Hi !",
	direction:"TOP",
	duration:"750",
	onStart:function(){
		alert("Let's flip");
	},
	onFinish:function(){
		alert("ok, it's flipped :)");
	}
});
```

Demo
----

http://blog.guilhemmarty.com/flippy/