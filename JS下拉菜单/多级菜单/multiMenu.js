/**
 * Created by Administrator on 2017/3/11 0011.
 */
window.onload =function () {
    var oList = document.getElementsByTagName('li');
    for (var i = 0; i < oList.length; i++)
    {
        oList[i].onmouseover = function () {
         var oUl = this.getElementsByTagName('ul')[0];
         if (oUl != undefined)
            {
                oUl.style.display = "block";
            }
        };

        oList[i].onmouseout = function () {
            var oUl = this.getElementsByTagName('ul')[0];
            if (oUl != undefined)
            {
                oUl.style.display = "none";
            }
        }
    }

};