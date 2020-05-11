import 'jquery';
//import elements from './variables';
var common = {
     checkHasClass:function(item,className){
        var res = item.hasClass(className)?true:false;   
        return res;    
     },
     findWinWidth: function(){
         return $(document).width();
     },
     findWinHeight: function(){
        //return $(document).height();
        //for avoiding outside bars height in ios
        console.log(window.outerHeight + 'outerH')
        console.log($(window).height() + 'windowH')
        return (typeof window.outerHeight != 'undefined')?Math.min(window.outerHeight, $(window).height()):$(window).height()

     }


}

export default common;
 