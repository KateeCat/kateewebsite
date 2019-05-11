function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

 window.onload = function() {

        var up = document.getElementsByClassName("up")[0];
        var show = document.getElementsByClassName("show")[0];
        up.onmouseenter = function () {
            show.style.display = "block";
        };
        up.onmouseleave = function () {
            show.style.display = "none";
        };

        var timer = null,leader = 0,target = 0; // leader=当前的位置    target=目标位置
        window.onscroll = function() {
            scroll().top > 0 ? up.style.display = "block": up.style.display = "none";
            leader = scroll().top;   // 存储当前的位置
        }
         up.onclick = function() {
            clearInterval(timer);
            timer = setInterval(function() {
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0,leader);   // 去往页面中的某个位置
                console.log(leader);
                if(leader == target) {
                    clearInterval(timer);
                }
            },30);
        }
    }
