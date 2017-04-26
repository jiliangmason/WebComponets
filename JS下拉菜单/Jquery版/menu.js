/**
 * Created by Administrator on 2017/3/11 0011.
 */
$(function () {
   $('.nav').mouseover(function () {
       $(this).children("ul").css({display: "block"});
   });

    $('.nav').mouseout(function () {
       $(this).children("ul").css({display: "none"});
    });
});