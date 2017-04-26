/**
 * Created by Administrator on 2017/3/13 0013.
 */
$(function () {
   $(".rMenu").on("click", function () {
       if ($("ul li").hasClass("active")){
           $("ul li").css({visibility: "hidden"}).removeClass("active");
       }
       else {
           $("ul li").css({visibility: "visible"}).addClass("active");
       }
   })
});