$(function () {
    let $container = $('.container'),
        $imageList = null;
    // 1.绑定数据
    ~ function () {
        let str = ``
        for (let i = 0; i < 10; i++) {
            str += `<div class="imgBox"><img src="" alt="" data-src="image/banner${Math.round(Math.random()*3+1)}.jpg"></div>`
        }
        $container.html(str)

        $imageList = $container.find('img')
    }();

    // 2.加载真实图片
    // =>lazyImg：单张图片加载，传递谁就加载谁
    let lazyImage = (curImg) => {
        let $curImg = $(curImg),
            trueImg = $curImg.attr('data-src');
        let tempImg = new Image()
        tempImg.onload = () => {
            // $curImg.attr('src', trueImg).css({
            //     display: block
            // })
            $curImg.attr('src', trueImg).stop().fadeIn(300) //结束当前正在运行的动画，然后执行fadeIn让图片300ms显示出来
            tempImg = null
            curImg.isLoad = true //图片加载成功后，设置一个自定义属性存储当前图片已经加载了，后期不需要重复加载
        }
        tempImg.src = trueImg
    }

    // =》computedImg:计算可加载图片
    let computedImg = () => {
        // =》观察所有图片中谁能加载，执行lazyImage让其加载
        $imageList.each((index, curImg) => {
            // A:当前图片所在盒子的底边距离Body偏移
            // B:当前浏览器底边距离body偏移
            let $curImg = $(curImg),
                $imgBox = $curImg.parent(),
                A = $imgBox.offset().top + $imgBox.outerHeight(),
                B = document.documentElement.scrollTop + document.documentElement.clientHeight
            if (A <= B) {
                // =>代表图片所在的盒子呈现在视野中，开始加载真实图片
                if (curImg.isLoad) {
                    // =>当前图片如果已经加载不在重复加载
                    return
                }
                lazyImage(curImg)
            }

        })
    }

    $(window).on('load scroll', computedImg) //=>Load和 Scroll的时候做相同的事件
})