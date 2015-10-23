/**
 * @desc 与平台无关的一些通用工具方法
 *
 * Created by shenlei on 2015/8/31.
 */

var Utils = (function (undefined){

    /**
     * @desc 该方法将以首字母大写的形式放回参数类型，例如：Null、Array、Object...
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
     * @desc 判断一个对象是否为空对象，这里的空对象是指代对象除开原始具备的原生属性外不在具备后期添加的属性
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
     * @desc 对象赋值方法，当只传递一个参数时，将返回一个复制得来的对象，
     *     当传递的参数个数为两个时，将会把第一个参数的所有属性赋值到第二个对象上，同名属性将被覆写
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

        // 方法可能进行递归调用，如果参数 origin 的类型不是Object或Array则不应该进入 for in 循环
        if ( type(origin) !== 'Object' || type(origin) !== "Array" ){
            return origin;
        }

        // 延迟声明，避免不必要的内存和指令开销
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