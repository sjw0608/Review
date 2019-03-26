/**
 * 
 * auth:sjw
 * time:2019年3月20日09点53分
 * 参考 JQ 封装AJAX库
 * 
 */

;
(function anonymous(window) {
    function AJAX(options) {
        return new init(options)
    };

    let init = function init(options = {}) {
        let {
            url,
            method = 'GET',
            data = null,
            dataType = 'JSON',
            async = true,
            cache = true,
            success,
            error
        } = options;
        // =>MOUNT:把配置项挂载到实例上
        ['url', 'method', 'data', 'dataType', 'async', 'cache', 'success', 'error'].forEach(item => {
            this[item] = eval(item)
        })
        // =>SEND:发送请求
        this.sendAjax()
    }

    AJAX.prototype = {
        constructor: AJAX,
        init,
        // =》发送AJAX请求
        sendAjax() {
            this.handleData();
            this.handleCache();
            console.log(this);
            let {
                method,
                url,
                async,
                error,
                success,
                data
            } = this,
            xhr = new XMLHttpRequest;
            xhr.open(method, url, async);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    // =>error
                    if (!/^(2|3)\d{2}$/.test(xhr.status)) {
                        error && error(xhr.statusText, xhr);
                        return
                    }
                    // =>success
                    // =>处理dataType
                    let result = this.handleDataType(xhr);
                    success && success(result, xhr);
                }
            };
            xhr.send(data);
        },
        // =>处理dataType
        handleDataType(xhr) {
            let dataType = this.dataType.toUpperCase(),
                result = xhr.responseText;
            switch (dataType) {
                case 'TEXT':
                    break;
                case 'JSON':
                    result = JSON.parse(result)
                    break;
                case 'XML':
                    result = xhr.responseXML
                    break;
            }
            return result
        },
        // =>处理cache
        handleCache() {
            let {
                url,
                method,
                cache
            } = this;
            if (/^GET$/i.test(method) && cache === false) {
                url += `${this.check()}_=${+(new Date())}`; //=>url末尾追加时间戳
                this.url = url;
            }
        },
        // =>处理DATA
        handleData() {
            let {
                method,
                data
            } = this;
            if (!data) return;
            if (typeof data === 'object') {
                // =>如果是Object对象，转换成x-www-form-urlencoded
                let str = ``;
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        str += `${key}=${data[key]}&`;
                    }
                }
                data = str.substring(0, str.length - 1);
            }
            // =>根据请求方式不同，传递给服务器方式不同
            if (/^(GET|DELETE|HEAD|TRACE|OPTIONS)$/i.test(method)) {
                this.url += `${this.check()}${data}`;
                this.data = null;
                return
            }
            this.data = data; // =>POST请求
        },
        // =>检测URL种是否存在问号
        check() {
            return this.url.indexOf('?') > -1 ? '&' : '?'
        }
    };

    init.prototype = AJAX.prototype;

    window.ajax = AJAX;
})(window);