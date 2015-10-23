/**
 *
 *  �ӿڶ��壺
 *
 *  render(parent | selector, data) : void
 *      -- ҳ����Ⱦ����, ͨ�� data �ṩ�����ݽ���ҳ����Ⱦ
 *
 * Created by shenlei on 2015/8/22.
 */

;(function (global, doc){

    //  ǰ��ʵ�֣�������Ҫ�Ż�
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
            throw new Error("�����ڵ�������� : " + type);
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
