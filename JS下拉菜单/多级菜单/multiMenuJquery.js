/**
 * Created by Administrator on 2017/3/11 0011.
 */
$(function () {
    $("li").has("ul").mouseover(function () {
        //$(this).children("ul").css({display: "block"});
        $(this).children('ul').slideDown(1000);
    });

    $('li').has('ul').mouseleave(function () {
       //$(this).children('ul').css({display: "none"});
        $(this).children('ul').slideUp(1000);
    });
        
});