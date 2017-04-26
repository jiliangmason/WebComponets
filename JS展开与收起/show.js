 /**
 * Created by Administrator on 2017/4/15 0015.
 */
var h = 0;
 
 function addH() {
     if (h < 300) {
         h += 5;
         document.getElementById('pn').style.height = h + 'px';
         
     }
     else {
         return;
     }
     setTimeout("addH()", 30);

 }

 function subH() {
     if (h > 0) {
         h -= 5;
         document.getElementById('pn').style.height = h + 'px';
     }
     else {
         document.getElementById('pn').style.display = 'none';
         return;
     }
     setTimeout("subH()", 30);
 }
 
 window.onload = function () {
     addH();
     setTimeout("subH()", 3000);
 };
 