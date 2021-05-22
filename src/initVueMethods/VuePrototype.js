export default function (Vue) {
    Vue.prototype.throttle = function (fn, delay) {
        var timeout
        var start = new Date;
        var threshhold = delay || 160
        return function () {

            var context = this, args = arguments, curr = new Date() - 0

            clearTimeout(timeout)//总是干掉事件回调
            if (curr - start >= threshhold) {
                fn.apply(context, args) //只执行一部分方法，这些方法是在某个时间段内执行一次
                start = curr
            } else {
                //让方法在脱离事件后也能执行一次
                timeout = setTimeout(function () {
                    fn.apply(context, args)
                }, delay);
            }
        }
    }

    Vue.prototype.debounce = function (fn, delay) {
        var timer = null;
        return function () {
            var context = this
            var args = arguments
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay)
        }
    }
}