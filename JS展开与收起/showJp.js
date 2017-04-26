/**
 * Created by Administrator on 2017/4/15 0015.
 */
$(document).ready (function () {
    $("#button").toggle(function () {
       $(this).text("收起-");
        $(".content").show(1000);
    }, function () {
        $(this).text("展开+");
        $(".content").hide(1000);
    });
});