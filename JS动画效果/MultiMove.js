/**
 * Created by Administrator on 2017/4/22 0022.
 */
window.onload = function () {
    /*
     单个运动
     var ali = document.getElementsByTagName('li');
     for (var i = 0; i < ali.length; i++) {
     ali[i].timer = null; //防止每个obj使用全局的timer
     ali[i].onmouseover = function () {
     //startMove2(this, 'width', 400);
     startMove2(this, 'opacity', 100);
     };

     ali[i].onmouseout = function () {
     //startMove2(this, 'width', 200);
     startMove2(this, 'opacity', 30);
     }
     }*/

    /*
     链式运动
     var oli = document.getElementById('list2').getElementsByTagName('li')[0];
     oli.onmouseover = function () {
     startMove2(oli, 'width', 400, function () {
     startMove2(oli, 'height', 300, function () {
     startMove2(oli, 'opacity', 100);
     });
     });
     };*/

    var oli = document.getElementById('list2').getElementsByTagName('li')[0];
    oli.onmouseover = function () {
        var settings = {width: 220, height: 300, opacity: 100};
        startMove3(oli, settings);
    };

    oli.onmouseout = function () {
        var settings = {width: 200, height: 200, opacity: 30};
        startMove3(oli, settings);
    }
};

/*
 * 获取样式
 * */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } //IE

    else {
        return getComputedStyle(obj, false)[attr];
    } //firefox
}


/*
 * 没有border的条件下使用
 * */
function startMove(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var speed = (target - obj.offsetWidth) / 10; //无border
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (obj.offsetWidth == target) {
            clearInterval(obj.timer);
        }
        else {
            obj.style.width = obj.offsetWidth + speed + 'px';
        }

    }, 30);
}

/*
 * 有border的条件下使用，改良修正了border带来的bug, 添加attr
 * attr: 属性  target: 属性目标值  fn: 回调函数
 * */
function startMove2(obj, attr, target, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var curStyle = 0;

        if (attr == 'opacity') {
            curStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100); //解决小数bug
        }
        else {
            curStyle = parseInt(getStyle(obj, attr));
        } //属性判断

        var speed = (target - curStyle) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //解决达不到目标值bug
        if (curStyle == target) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
        else {
            if (attr == 'opacity') {
                obj.style.opacity = (curStyle + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + (curStyle + speed) + ')';

            }
            else {
                obj.style[attr] = curStyle + speed + 'px';
            }

        }

    }, 30);

}

/*
 同时运动的运动框架
 * settings: json格式 {attr1: target1, attr2: target2, ...}传入多个属性和值
 *
 * */
function startMove3(obj, settings, fn) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
		var flag = true; //判断所有运动都到达目标值
        for (var attr in settings) {

            var curStyle = 0;
            if (attr == 'opacity') {
                curStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                curStyle = parseInt(getStyle(obj, attr));
            } //属性判断

            var speed = (settings[attr] - curStyle) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //计算速度

            if (curStyle != settings[attr]) {
                flag = false;
            } //判断是否所有动作都结束 true: yes false: no

            if (attr == 'opacity') {
                obj.style.opacity = (curStyle + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + (curStyle + speed) + ')';

            }
            else {
                obj.style[attr] = curStyle + speed + 'px';
            }

        }

        if (flag) {
            clearInterval(obj.timer);
            if (fn) {fn}
        } //全部动作结束

    }, 30);

}

