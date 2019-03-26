/**
 * auth: Sjw
 * creatTime:2019年1月30日09点34分
 */

var EventUtil = {
  /**
        element: 绑定/解绑事件元素
        type：绑定/解绑事件类型
        handler：绑定/解绑事件函数
    */

  /**
   * 事件绑定
   */

  addHandler: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler)
    } else {
      element['on' + type] = handler
    }
  },

  getEvent: function(event) {
    return event ? event : window.event
  },

  getTarget: function(event) {
    return event.target || event.srcElement
  },

  /**
   * 取消事件默认行为
   */
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault()
    } else {
      event.returnValue = false
    }
  },

  /**
   * 事件解绑
   */

  removeHandler: function(element, type, handler) {
    if (element.removeEventLister) {
      element.removeEventLister(type, handler, false)
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, handler)
    } else {
      element['on' + type] = null
    }
  },

  /**
   *  阻止事件冒泡
   */
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation()
    } else {
      event.cancelBubble = true
    }
  }
}
