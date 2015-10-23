/**
 *
 *  接口定义：
 *
 *  render(parent | selector, data) : void
 *      -- 页面渲染函数, 通过 data 提供的数据进行页面渲染
 *
 * Created by shenlei on 2015/8/22.
 */

;(function (global, doc){

    //  前期实现，后期需要优化
    function render(parent, data){

        parent = parent || doc.body;

        var i = 0,
            node,
            children = data[ 'children'].length;

        node = getWidget(data[ 'Type' ], data[ 'Style' ], data[ 'Attribute'], data[ 'Event' ], data[ 'Text' ]);

        parent.appendChild(node);

        if (children < 0) return;

        for ( ; i < children; i++){
            render(node, data.children[ i ]);
        }

    }

    function getWidget(type, styles, attributes, events, text){
        if (type){
            return type().createNode(styles, attributes, events, text);
        } else {
            throw new Error("不存在的组件类型 : " + type);
        }
    }

    // export module
    if ( typeof define === "function" && define.amd ) {
        define( "Simulate", [], function() {
            return render;
        });
    }

   global.Simulate  = global.R = {
        render : render
    };

}(window, document));
