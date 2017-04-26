/**
 * Created by Administrator on 2017/4/22 0022.
 */
var timer = null;
function startMove(target) {
    var div = document.getElementById('div1');

    clearInterval(timer); //多次鼠标动作后，清理其余定时器
    timer = setInterval(function () {
        var speed = (target - div.offsetLeft) / 10; //（目标-当前）/系数
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
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


