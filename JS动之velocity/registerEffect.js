/**
 * Created by Administrator on 2017/5/21 0021.
 */
$(document).ready(function () {
    $('#box1').on('mouseover', function () {
        $(this).velocity("callout.shake", {duration: 1000});
    });

    $.Velocity.RegisterEffect("mason.move", {
        defaultDuration: 1000,
        calls: [[{scaleX: 1.5}, 0.5],[{scaleX: 1.0}, 0.5]]
    });

    $('#box2').on('mouseover', function () {
        $(this).velocity("mason.move");
    })
});