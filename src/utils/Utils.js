/**
 * @desc ��ƽ̨�޹ص�һЩͨ�ù��߷���
 *
 * Created by shenlei on 2015/8/31.
 */

var Utils = (function (undefined){

    /**
     * @desc �÷�����������ĸ��д����ʽ�Żز������ͣ����磺Null��Array��Object...
     *
     * @param v
     * @returns {string}
     */
    function type(v){

        if (v == null){
            return "Null";
        }

        var typeInfo = Object.prototype.toString.call(v);

        return typeInfo.substring(8, typeInfo.length - 1);
    }

    /**
     * @desc �ж�һ�������Ƿ�Ϊ�ն�������Ŀն�����ָ���������ԭʼ�߱���ԭ�������ⲻ�ھ߱�������ӵ�����
     *
     * @param obj
     * @returns {boolean}
     */
    function isEmptyObject(obj){
        for ( var prop in obj ){
            return false;
        }
        return true;
    }

    /**
     *
     * @desc ����ֵ��������ֻ����һ������ʱ��������һ�����Ƶ����Ķ���
     *     �����ݵĲ�������Ϊ����ʱ������ѵ�һ���������������Ը�ֵ���ڶ��������ϣ�ͬ�����Խ�����д
     *
     * @param origin
     * @param obj
     * @returns {*}
     */
    function copy(origin, obj){
        if ( origin === undefined ){
            return undefined;
        }

        if ( type(origin) === "Null" ){
            return null;
        }

        // �������ܽ��еݹ���ã�������� origin �����Ͳ���Object��Array��Ӧ�ý��� for in ѭ��
        if ( type(origin) !== 'Object' || type(origin) !== "Array" ){
            return origin;
        }

        // �ӳ����������ⲻ��Ҫ���ڴ��ָ���
        var tempArray = [], tempObject = obj || {}, copyObject = {}, prop, i = 0, len = 0;

        for ( prop in origin ){
            if ( type(prop) === "Array" ){
                tempArray = [];
                i = 0;
                len = origin[ prop ].length;
                for ( ; i < len; ++i){
                    tempArray.push( copy(origin[ prop ][ i ]) );
                }
                copyObject[ prop ] = tempArray;
            } else if ( type(prop) === "Object" ){
                tempObject = copy(origin[prop]);
                copyObject [ prop ] = tempObject;
            } else {
                copyObject[ prop ] = origin[ prop ];
            }
        }

        return copyObject;
    }

    function inherit(sup, sub){
       copy(sup, sub);
    }

    // export APIs
    return {
        type : type,
        copy : copy,
        inherit : inherit,
        isEmptyObject : isEmptyObject
    }

}());