let each = function (obj, callback) {
    // =>验证时数组（类数组）还是对象
    let flag = 'length' in obj //简单验证有length是数组或者类数组，没有是对象
    if (flag) {
        for (let i = 0; i < obj.length; i++) {
            let item = obj[i]
            let res = callback && callback.call(item, i, item)
            if (res === false) {
                break
            }
        }
    } else {
        for (let key in obj) {
            if (obj.hasOwnProperty[key]) {
                let value = obj[key]
                let res = callback && callback.call(value, key, value)
                if (res === false) {
                    break
                }
            }
        }
    }
}

each([1, 2, 3, 4], function (index, item) {
    console.log(index, item, this);
    if (index >= 1) {
        return false
    }
})

each({
    name: 'zhangsan',
    age: 18,
    sex: 0
}, function (key, value) {
    console.log(key, value, this);
})