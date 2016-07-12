/**
 * Created by xc on 2016/5/13.
 */
(function () {
    "use strict";

    /**
     * 表单验证插件配置。
     */
    angular
        .module('myApp')
        .config(validateCfg);

    //注入
    validateCfg.$inject = ['w5cValidatorProvider'];

    function validateCfg(w5cValidatorProvider) {
        //全局配置
        w5cValidatorProvider.config({
            blurTrig: false,
            showError: true,
            removeError: true
        });

        /**
         * 验证规则。
         */
        w5cValidatorProvider.setRules({
            email: {
                required: "输入的邮箱地址不能为空",
                email: "输入邮箱地址格式不正确"
            },
            username: {
                required: "输入的用户名不能为空",
                pattern: "用户名必须输入字母、数字、下划线,以字母开头"
            },
            password: {
                required: "密码不能为空",
                minlength: "密码长度不能小于{minlength}",
                maxlength: "密码长度不能大于{maxlength}"
            },
            number: {
                required: "数字不能为空"
            }
        });
    }
})();

