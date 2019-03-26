var ary = [1, 2, 2, 2, 3, 5, 4, 5, 4, 6, 2, 3, 1, 1]

// 双重for循环去重
for (let i = 0; i < ary.length - 1; i++) {
  var item = ary[i]
  for (let k = i + 1; k < ary.length; k++) {
    if (item == ary[k]) {
      ary.splice(k, 1)
      k--
    }
  }
}
console.log(ary)

//基于对象去重
var ary = [1, 2, 2, 2, 3, 5, 4, 5, 4, 6, 2, 3, 1, 1]
var obj = {}
for (let i = 0; i < ary.length; i++) {
  var item = ary[i]
  if (typeof obj[item] !== 'undefined') {
    ary[i] = ary[ary.length - 1]
    ary.length--
    i--
  }
  obj[item] = item
}
console.log(ary)

// es6去重
console.log(Array.from(new Set([1, 2, 2, 2, 3, 5, 4, 5, 4, 6, 2, 3, 1, 1])))

function sum() {
  let sum = null
  for (let i = 0; i < arguments.length; i++) {
    var item = arguments[i]
    item = Number(item)
    isNaN(item) ? null : (sum += item)
    // if (!)) {
    //   sum += arguments[i]
    // }
  }
  return sum
}

console.log(sum(1, 2, 3, 4, '20', 'AA'))

var a = 10
var b = a
b = 20
console.log(a, b)

var a = [1, 2]
var b = a
b[0] = 3
a[1] = 0
b = [6, 7]
b[0] = 5
a[1] = 10
console.log(a, b)

function queryById(id) {
  var nodeList = document.getElementsByTagName('*')
  var list = []
  for (var i = 0; i < nodeList.length; i++) {
    id = nodeList[i].id ? list.push(nodeList[i]) : null
  }
  return list
}

var i = 1

function fn(i) {
  return function (n) {
    console.log(n + ++i)
  }
}

var f = fn(2)
f(3)
fn(5)(6)
fn(7)(8)
f(4)

// 惰性函数
var utils = (function () {
  return {}
})()

var k = 1

function bi() {
  var k = 2
  bao()
}

function bao() {
  console.log(k)
}
bi()

function test() {
  var index = 0
}

test()
console.log(index)

var n = 2
var obj = {
  n: 3,
  fn: (function (n) {
    n * 2
    this.n += 2
    var n = 5
    return function (m) {
      this.n *= 2
      console.log(m + ++n)
    }
  })(n)
}

var fn = obj.fn
fn(3)
obj.fn(3)
console.log(n, obj.n)

function unique(ary) {
  var obj = {}
  for (var i = 0; i < ary.length; i++) {
    var item = ary[i]
    if (obj.hasOwnProperty(item)) {
      ary[i] = ary[ary.length - 1]
      ary.length--
      i--
      continue
    }
    obj[item] = item
  }
  obj = null
  return ary
}