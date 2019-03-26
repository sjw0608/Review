/**
 * Promise：他是ES6新增加的一个类（new Promise）目的是为了管理JS中的异步编程的，所以我们也把他成为‘Promise设计模式’
 */

// new Promise().then()
// =>三个状态 pending(准备：开始执行异步的任务)\fulfilled(成功)\rejected （失败）
// new Promise(() => {
//     // =>执行一个异步的任务（new Promise得时候，创建一个Promise得实例，立即会把当前函数体中执行得异步操作执行）=>'Promise是同步的，它可以管理异步操作'
//     setTimeout(() => {}, 1000)
//     console.log(1);
// }).then()
// console.log(2);


new Promise().then()
new Promise((resolve, reject) => {
    // =>resolve当异步操作执行成功，执行resolve方法
    // =>reject 当异步操作执行失败，执行reject方法
    setTimeout(() => {
        resolve(100)
    }, 1000)
}).then(() => {
    // 第一个传递的函数是resolve
    console.log('ok');
}, () => {
    // 第二个传递的函数是reject
})