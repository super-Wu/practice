var tools = {
	$ : function(selector,context){
		var firstChar = selector.charAt(0);
		context = context || document;
		if( firstChar === "#" ){
			return document.getElementById(selector.substring(1));
		}else if(firstChar === "."){
			return context.getElementsByClassName(selector.substring(1));
		}else{
			return context.getElementsByTagName(selector);
		}	
	},
	getStyle:function (obj,attr){
		if( obj.currentStyle ){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];s
		}	
	},
	hasClass:function (element,classNames) {
		var classAll = 	element.className.split(" ");  //"blue red"
		for( var i = 0; i < classAll.length; i++ ){
			if( classAll[i] === classNames ){
				return true;
			}
		}
		return false;
	},
	removeClass:function (element,classNames){
		if( tools.hasClass(element,classNames) ){  //如果有这个class，就删除
			var classAll = element.className.split(" "); // ["blue","red"]
			for( var i = 0; i < classAll.length; i++ ){
				if( classAll[i] === classNames ){
					classAll.splice(i,1);
					i--;
				}
			}
			//如果这个数组为kong，那么就删除标签上的class这个属性
			if( classAll.length === 0 ){
				element.removeAttribute("class");
			}else{
				element.className = classAll.join(" ");
			}
			

		}
	},
	addClass:function (element,classNames){
		var classAll = element.className;  // ""    "blue"
		if( !tools.hasClass(element,classNames) ){
			classAll += " " + classNames;
		}
		element.className = classAll.trim();

	},
	toggleClass:function (element,classNames){
		if( tools.hasClass(element,classNames) ){
			tools.removeClass(element,classNames);
			return false;
		}else{
			tools.addClass(element,classNames);
			return true;
		}	
	}
}



/*
	参数：
		element:给这个元素绑定鼠标滚轮事件
		upFn：向上触发的函数
		downFn:向下触发的函数
*/
function mouseWheel(element,upFn,downFn){
	element.onmousewheel = fn;
	function fn(ev){
		var direction = true;
		if(ev.wheelDelta){
			direction = ev.wheelDelta < 0 ? true:false;
		}else if(ev.detail){
			direction = ev.detail < 0 ? false:true;
		}
		
		if(element.addEventListener){
			element.addEventListener("DOMMouseScroll",fn,false);
		}
		if( !direction ){  //向上
			typeof upFn === "function" && upFn.call(element,ev);
		}else{  //向下
			typeof downFn === "function" && downFn.call(element,ev);
		}
		
		ev.preventDefault();

	}
}