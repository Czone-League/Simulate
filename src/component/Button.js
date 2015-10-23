/**
 * Created by shenlei on 2015/8/31.
 */
;(function (global){

    function Button(){
        return new Button.fn.init();
    }

    Button.fn = Button.prototype = {
        createNode : function (){

        }
    }

    var init = Button.fn.init = function (){

    }

    init.prototype = Button.fn;

    Button.fn.constructor = Button;

    global.Button = Button;

}(Widget));