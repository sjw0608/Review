// var oBox = document.getElementById('tabBox')
// var tabList = oBox.getElementsByTagName('li')
// var divList = oBox.getElementsByTagName('div')

// for (var i = 0; i < tabList.length; i++) {
//     tabList[i]['Index'] = i
//     tabList[i].onclick = function () {
//         changeTab(this.Index)
//     }
// }

// function changeTab(n) {
//     for (var j = 0; j < tabList.length; j++) {
//         tabList[j].className = ''
//         divList[j].className = ''
//     }
//     tabList[n].className = 'active'
//     divList[n].className = 'active'
// }


// function queryURLParameter(str) {
//     // 1.创建一个a标签把需要解析的地址当作A标签的HREF赋值
//     var link = document.createElement('a')
//     link.href = str

//     // =>页面中不需要展示A，只需要利用它的属性即可，无需添加到页面中
//     // 2.A元素对象的HASH/SEARCH两个属性分别存储了哈希值和参数值
//     var search = link.search.substr(1),
//         hash = link.hash.substr(1)
//     // 3.分别解析出HASH和参数即可
//     var obj = {}
//     hash ? obj.HASH = hash : null
//     if (search) {
//         // ->先按照&进行拆分
//         search = search.split('&')
//         for (var i = 0; i < search.length; i++) {
//             var itemAry = search[i].split('=')
//             obj[itemAry[0]] = itemAry[1]
//         }
//     }
//     return obj
// }


// var str = 'http://baidu.com?age=18&name=张三#active'
// console.log(queryURLParameter(str));

Array.prototype.unique = function unique() {
    var obj = {}
    for (var i = 0; i < this.length; i++) {
        var item = this[i]
        if (obj.hasOwnProperty(item)) {
            this[i] = this[this.length - 1]
            this.length--
            i--
            continue
        }
        obj[item] = item
    }
    obj = null
    // return this
}



function Foo() {
    getName = function () {
        console.log(1);
    }
    return this
}

Foo.getName = function () {
    console.log(2);
}

Foo.prototype.getName = function () {
    console.log(3);
}

var getName = function () {
    console.log(4);
}

function getName() {
    console.log(5);
}

Foo.getName(); //2
getName(); // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); //3