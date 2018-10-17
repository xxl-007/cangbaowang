function sendAjax(url, options) {
    var _default = {
        method: 'GET',
        data: null,
        success: null,
        error: null
    }
    // 替换默认值
    for(var i in options) {
        _default[i] = options[i];
    }
    // 解决缓存， 保证每一次请求地址都不一样，就可以解决
    //拼接字符串， get请求
    if(_default.method.toUpperCase() == 'GET') {
        // 如果url中存在?, 默认添加&符号
        var f = url.indexOf('?') > -1 ? '&' : '?';
        url += f + '_=' + Date.now();
        for(var j in _default.data) {
            url += '&' + j + '=' + _default.data[j];
        }
        // url拼接成功, get请求send中不需要参数,把他转换为null;
        _default.data = null;
    }
    var xhr = new XMLHttpRequest();
    xhr.open(_default.method, url, true);

    // 在发送时, 先把对象转换为json字符串(传输格式为字符串)
    _default.data = JSON.stringify(_default.data);
    xhr.send(_default.data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {

                // 获取返回的内容
                var val = xhr.responseText;
                val = JSON.parse(val);
                
                    if(typeof _default.success === 'function') {
                        _default.success(val);
                    }
               
            } else {
                if(typeof _default.error === 'function') {
                    _default.error(val);
                }
            }
        }
    }
}	