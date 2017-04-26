/**
 * Created by Administrator on 2017/4/15 0015.
 */
function waterfall(parent, box) {
    var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent, box);
    //计算列数
    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.body.clientWidth/oBoxW);

    //设置main宽度
    oParent.style.cssText = 'width:' + oBoxW * cols + 'px;margin: 0 auto';

    var hArr = []; //每一列高度
    for (var i = 0; i < oBoxs.length; i++) {

        if (i < cols) {
            hArr.push(oBoxs[i].offsetHeight);
        } //第一排的前6张图片
        else { //从第七张开始i=6
            var minH = Math.min.apply(null, hArr); //数组最小值
            var index = getMinhIndex(hArr, minH);
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            hArr[index] += oBoxs[i].offsetHeight; //列最小值更新
        }
    }

}

function getMinhIndex(array, value) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
}

function getByClass(parent, clsName) {
    var boxArray = new Array();
    var oElement = parent.getElementsByTagName('*');

    for (var i = 0; i < oElement.length; i++) {
        if (oElement[i].className == clsName) {
            boxArray.push(oElement[i]);
        }
    }
    return boxArray;
}

//检测是否加载数据块的条件
function checkScroll() {
    var oParent = document.getElementById('main');
    var oBox = getByClass(oParent, 'box');
    var lastBoxH = oBox[oBox.length - 1].offsetTop + Math.floor(oBox[oBox.length - 1].offsetHeight/2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;

    return (lastBoxH < scrollTop + height);

}

window.onload = function () {
    waterfall('main', 'box');
    var dataInt = {"data": [{"src":"25.jpg"},{"src":"26.jpg"},{"src":"27.jpg"},{"src":"28.jpg"}]};
    //模拟的ajax数据
    window.onscroll = function () {
        if (checkScroll) {
            //将数据库渲染到尾部
            var oParent = document.getElementById('main');
            for (var i = 0; i < dataInt.data.length; i++) {
                var oBox = document.createElement('div');
                oBox.className = 'box';
                oParent.appendChild(oBox);

                var oPic = document.createElement('div');
                oPic.className = 'pic';
                oBox.appendChild(oPic);

                var oImg = document.createElement('img');
                oImg.src="images/" + dataInt.data[i].src;
                oPic.appendChild(oImg);
            }
            waterfall('main', 'box'); //让后添加的图片也排列好
        }
    }
};