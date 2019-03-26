;
(
    function myAxios(window) {
        // =>设置默认的参数配置项
        let _default = {
            method: 'GET',
            url: '',
            baseUrl: '',
            headers: {},
            dataType: 'JSON',
            data: null, //=>post系列请求基于主体传递给服务器的内容
            params: null, //=>get系列请求基于问号传参传递给服务器的内容
            cache: true
        };
        // =>基于 Promise 设计模式管理AJAX请求
        let ajaxPromise = function ajaxPromise(options) {
            // options中融合了：默认配置信息、用户基于defaults修改的信息，用户执行GET|POST的时候传递的信息，越靠后的优先级越高
            let {
                method,
                url,
                baseUrl,
                data,
                dataType,
                headers,
                params,
                cache
            } = options;
            // =>把传递的参数进一步处理
            if (/^(GET|DELETE|HEAD|OPTIONS)$/i.test(method)) {
                // =>GET系列
                if (params) {
                    url += `${ ajaxPromise.check(url)}${ajaxPromise.formatData(params)}`;
                }
                if (cache === false) {
                    url += `${ ajaxPromise.check(url)}${ajaxPromise.formatData(params)}_=${+(new Date())}`;
                }
                data = null; //=>GET系列请求主体就是什么都不放
            } else {
                // =>POST系列
                if (data) {
                    data = ajaxPromise.formatData(data);
                }
            }
            // =>基于 Promise 管理发送 AJAX
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest;
                xhr.open(method, `${baseUrl}${url}`);
                // =>如果HEADERS存在，需要设置请求头
                if (headers !== null && typeof headers === 'object') {
                    for (let attr in headers) {
                        if (headers.hasOwnProperty(attr)) {
                            let val = headers[attr];
                            if (/[\u4e00-\u9fa5]/.test(val)) {
                                // =>val中包含中文：我们对中文进行编码
                                //  encodeURIComponent/decodeURIComponent
                                val = encodeURIComponent(val)
                            }
                            xhr.setRequestHeader(attr, val);
                        }
                    }
                };
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (/^(2|3)\d{2}$/.test(xhr.status)) {
                            let result = xhr.responseText;
                            dataType = dataType.toUpperCase();
                            dataType === 'JSON' ? result = JSON.parse(result) : (dataType === 'XML' ? result = xhr.responseXML : null)
                            resolve(result, xhr);
                            return
                        }
                        reject(xhr.statusText, xhr);
                    }
                };
                xhr.send(data);
            })
        };
        // =>把默认值暴露出来，后期可以在使用的时候设置一些基础的默认值
        ajaxPromise.defaults = _default;
        // =>把对象转换成URLENCODED格式字符串
        ajaxPromise.formatData = function formatData(obj) {
            let str = ``
            for (let attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    str += `${attr}=${obj[attr]}&`;
                }
            }
            return str.substring(0, str.length - 1)
        };
        ajaxPromise.check = function check(url) {
            return url.indexOf('?') > -1 ? '&' : '?'
        };
        // =>GET
        ['get', 'delete', 'head', 'options'].forEach(item => {
            ajaxPromise[item] = function (url, options = {}) {
                options = {
                    ..._default, //=》默认值或者基于defaults修改的值
                    ...options, //=》用户调取方法传递的配置项
                    url: url, //=》请求的url地址（第一个参数：默认配置项和传递的配置项中都不会出现URL，只能这样获取）
                    method: item.toUpperCase() //=》以后执行ajaxPromise.head执行，不会设置METHOD这个配置项
                };
                return ajaxPromise(options)
            };
        });
        // =>POST
        ['post', 'put', 'patch'].forEach(item => {
            ajaxPromise[item] = function (url, data = {}, options = {}) {
                options = {
                    ..._default,
                    ...options,
                    url: url,
                    method: item.toUpperCase(),
                    data: data
                };
                return ajaxPromise(options)
            };
        });
        window.ajaxPromise = ajaxPromise;
    }
)(window)