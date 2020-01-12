define(['core/str'], function(Str) {
    return {
        register: function(Vue) {
            Vue.filter('get_string', function(value, key, component) {
                var param = value ? value : null;
                return Str.get_string(key, component, param);
            });
        }
    };
});