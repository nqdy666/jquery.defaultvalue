/**
 * Created by NQLDY on 2015/7/26.
 */

(function($) {

    $.QjzdDefaultValue = function($inputObjs, opt) {
        if (typeof($inputObjs) !== 'object') {
            $inputObjs = $($inputObjs);
        }
        var options = $.extend({}, $.QjzdDefaultValue.defaults);
        //设置options入参
        var setOptions = function (opt) {
            if (typeof(opt) !== 'object') {
                opt = {};
            }
            options = $.extend(options, opt);
        };
        setOptions(opt);

        $inputObjs.each(function() {
            var defauleValue = $(this).attr("defaultValue");
            if (typeof (options.defaultValue) !== "undefined" && options.defaultValue) {
                defauleValue = options.defaultValue;
            }
            $(this).val(defauleValue);
            $(this).addClass('default-value-blur');
            $(this).on('focus',function() {
                if ($(this).val() == defauleValue) {
                    $(this).val("");
                    $(this).removeClass('default-value-blur');//输入值的样式
                }
            }).on('blur',function() {
                if ($(this).val() == "") {
                    $(this).val(defauleValue);
                    $(this).addClass('default-value-blur');
                }else{
                    $(this).removeClass('default-value-blur');//默认值的样式
                }
            });
        });

        var api = {};
        return api;
    };

    //默认参数
    $.QjzdDefaultValue.defaults = {
        defaultValue: ""
    };

    $.fn.setDefauleValue = function (options, callback) {
        var api;
        if(this && this.length > 0){
            api = $.QjzdDefaultValue(this, options);
            if ($.isFunction(callback)) {
                callback.apply(api);
            }
        }
        return this;
    };

}(jQuery));