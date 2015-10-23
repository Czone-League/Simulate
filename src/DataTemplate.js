/**
 * @desc 约定的组件配置数据格式
 *
 *  当配置数据中可为空的字段为空时，将采用库中自带的属性进行渲染
 *
 * Created by shenlei on 2015/08/22.
 */
var template = {
    "Type": "",
    "ID": "",
    "ParentID": "" || null,
    "Events": [] || null ,
    "Style": {} || null,
    "Attribute": {} || null,
    "Text": "" || null ,
    "Children": [] || null
};
