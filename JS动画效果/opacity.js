/**
 * Created by Administrator on 2017/4/22 0022.
 */
window.onload = function () {
    var div = document.getElementById('div2');
    div.onmouseover = function () {
        startFade(100);
    };

    div.onmouseout = function () {
        startFade(30);
    }
};

var timer = null;
var alpha = 30;
function startFade(target) {
    var div = document.getElementById('div2');
    clearInterval(timer);
    timer = setInterval(function () {
        var speed = 0;
        if (alpha > target) {
            speed = -10;
        }
        else {
            speed = 10;
        }
        if (alpha == target) {
            clearInterval(timer);
        }
        else {
            alpha += speed;
            div.style.filter = 'alpha(opacity:'+alpha+')';
            div.style.opacity = alpha/100;
        }
    }, 30);
}