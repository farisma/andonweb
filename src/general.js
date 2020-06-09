//import 'jquery';
//import elements from './variables';
var common = {
   checkHasClass: function (item, className) {
      //console.log("IREM", item);
        var res = item.classList.contains(className)?true:false;   
        return res;    
     },
     findWinWidth: function(){
         return window.innerWidth;
     },
     findWinHeight: function(){
        //return $(document).height();
        //for avoiding outside bars height in ios
      //   console.log(window.outerHeight + 'outerH')
      //   console.log($(window).height() + 'windowH')
        return typeof window.outerHeight != "undefined"
          ? Math.min(window.outerHeight, window.innerHeight)
          : window.innerHeight;

     }


}

export default common;
 