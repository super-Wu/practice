var setUp = tools.$("#btn");
var install = tools.$("#install");
var shadow = tools.$("#shadow");
var box = tools.$("#box");


setUp.addEventListener("click",function(){
	install.style.display = "block";
	shadow.style.display = "block";
});

//设置背景颜色
var colors = tools.$("input",tools.$(".color")[0]);
var arr = ["red","yellow","blue"];
var cur = 0;
for (var i = 0; i < colors.length; i++) {
	colors[i].index = i;
	colors[i].onclick = function(){
		tools.removeClass(colors[cur],"selected");
		box.style.background = arr[this.index];
		tools.addClass(this,"selected");
		cur = this.index;
	}
}

//设置宽度
var widths = tools.$("input",tools.$(".width")[0]);
var cur2 = 0
for (var i = 0; i < widths.length; i++) {
	widths[i].index = i;
	widths[i].onclick = function(){
		tools.removeClass(widths[cur2],"selected");
		box.style.width = 100 + 50*(this.index+1) + "px";
		tools.addClass(this,"selected");
		cur2 = this.index;
	}
}

//设置高度
var heights = tools.$("input",tools.$(".height")[0]);
var cur3 = 0
for (var i = 0; i < heights.length; i++){
	heights[i].index = i;
	heights[i].onclick = function(){
		tools.removeClass(heights[cur3],"selected");
		box.style.height = 100 + 50*(this.index+1) + "px";
		tools.addClass(this,"selected");
		cur3 = this.index;
	}
}

//恢复or确定
var recovery = tools.$("#recovery");//恢复
var determine = tools.$("#determine");//确定

recovery.addEventListener("click",function(){
	for (var i = 0; i < colors.length; i++) {
		tools.removeClass(colors[i],"selected");
		tools.removeClass(widths[i],"selected");
		tools.removeClass(heights[i],"selected");
	}
	box.style = "";
	install.style.display = "none";
	shadow.style.display = "none";
});


determine.addEventListener("click",function(){
//	for (var i = 0; i < colors.length; i++) {
//		tools.removeClass(colors[i],"selected");
//		tools.removeClass(widths[i],"selected");
//		tools.removeClass(heights[i],"selected");
//	}
	install.style.display = "none";
	shadow.style.display = "none";
})
