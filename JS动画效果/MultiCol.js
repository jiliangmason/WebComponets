/**
 * Created by Administrator on 2017/4/22 0022.
 */
/**
 * Created by Administrator on 2017/4/22 0022.
 */
window.onload = function () {
    var ali = document.getElementsByTagName('li');
    for (var i = 0; i < ali.length; i++) {
        ali[i].timer = null;
        ali[i].alpha = 30;
        ali[i].onmouseover = function () {
            startFade(this, 100);
        };

        ali[i].onmouseout = function () {
            startFade(this, 30);
        }
    }

};
/*
* opacity也要写成每一个obj的属性
* */

function startFade(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var speed = 0;
        if (obj.alpha > target) {
            speed = -10;
        }
        else {
            speed = 10;
        }
        if (obj.alpha == target) {
            clearInterval(obj.timer);
        }
        else {
            obj.alpha += speed;
            obj.style.filter = 'alpha(opacity:' + obj.alpha + ')';
            obj.style.opacity = obj.alpha / 100;
        }
    }, 30);

}