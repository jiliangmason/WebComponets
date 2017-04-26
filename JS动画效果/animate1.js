/**
 * Created by Administrator on 2017/4/22 0022.
 */
var timer = null;
function startMove(target) {
    var div = document.getElementById('div1');
    var speed;
    if (div.offsetLeft > target) {
        speed = -10;
    }
    else {
        speed = 10;
    }
    clearInterval(timer); //多次鼠标动作后，清理其余定时器
    timer = setInterval(function () {
        if (div.offsetLeft == target) {
            clearInterval(timer);
        }
        else {
            div.style.left = div.offsetLeft + speed + 'px';
        }
    }, 30);
}

window.onload = function () {
    var div = document.getElementById('div1');
    div.onmouseover = function () {
        startMove(0);
    };

    div.onmouseout = function () {
        startMove(-200);
    }
};


