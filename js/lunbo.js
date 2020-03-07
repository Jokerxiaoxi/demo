// 拿到小电视
var content = document.querySelector(".image>.content");
// 拿图片个数
var imgList = document.querySelectorAll(".image>.content>img");
//拿盒子
var image = document.querySelector(".image");
console.log(imgList);
// 图片宽度
var imgWidth = 1170;
// 初始化
content.style.left = 0;
//切换速度
var speed = 1000;
// 切换函数
var change = function(offset){
    // 往左偏移一个图片宽度 
    var newWidth =  parseInt(content.style.left) - offset;
    if (newWidth<-(imgList.length-1)*imgWidth) {
        content.style.left = "0px";
    } else if (newWidth > 0) {
        content.style.left = -(imgList.length-1)*imgWidth + "px";
    } else{
        content.style.left = newWidth+"px";
    }
}
//执行切换函数
var func = function() {
    change(imgWidth);
}
// 定时器
var timer = setInterval(func,3000);

//创建左右按钮
for (var i = 0; i < 2; i ++ ) {
    var btn = document.createElement("img");
    if (i == 0) {
        btn.src = "image/1.png";
        btn.className = "btnLt";
    } else {
        btn.src = "image/2.png";
        btn.className = "btnRt";
    }
    image.appendChild(btn);
    btn.style.top = (image.clientHeight - btn.clientHeight) / 2 + "px";
}

//获取左右按钮
var btnLt = document.querySelector(".btnLt");
var btnRt = document.querySelector(".btnRt");

//给左右按钮添加事件
btnLt.onclick = function() {
    change(-imgWidth);
}
btnRt.onclick = function() {
    change(imgWidth);
}

//添加光标悬停静止不动效果
content.onmouseover = function() {
    clearInterval(timer);
}

//光标移开继续切换
content.onmouseout = function() {
    timer = setInterval(func, speed);
}

//添加底部按钮
