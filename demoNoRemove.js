$(function(){

    var findVisibleID = function(){
        return "#" + $(".flipbox").children().filter(function() { return $(this).css("display") == "block"; }).attr("id");
    }

    $("#btn-reverse").on("click",function(e){
        $(".flipbox").flippyReverse();
        e.preventDefault();
    });
        
    $("#btn-left").on("click",function(e){
        $(".flipbox").flippy({
            color_target: "red",
            direction: "left",
            duration: "750",
            verso: "#left-content",
            recto: findVisibleID(),
            backhtml: "<span id=\"left-content\">Woohoo ! \\o/</span>",
            noRemove: true
         });
         e.preventDefault();
    });
    
    $("#btn-right").on("click",function(e){
        $(".flipbox").flippy({
            color_target: "red",
            direction: "right",
            duration: "750",
            verso: "#right-content",
            recto: findVisibleID(),
            backhtml: "<div id=\"right-content\"><img src=\"http://placekitten.com/610/300\" alt=\"placeholder\"/></div>",
            noRemove: true
         });
         e.preventDefault();
    });
    
    $("#btn-top").on("click",function(e){
        $(".flipbox").flippy({
            color_target: "#b6d635",
            direction: "top",
            duration: "750",
            verso: "#top-content",
            recto: findVisibleID(),
            backhtml: "<span id=\"top-content\" class=\"big\">Great !</span>",
            noRemove: true
         });
         e.preventDefault();
    });
    
    $("#btn-bottom").on("click",function(e){
        $(".flipbox").flippy({
            color_target: "#03588C",
            direction: "bottom",
            duration: "750",
            verso: "#bottom-content",
            recto: findVisibleID(),
            backhtml: "<span id=\"bottom-content\" class=\"big\">Flip !</span>",
            noRemove: true
         });
         e.preventDefault();
    });
    
    SyntaxHighlighter.all();
});

