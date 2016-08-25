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
	
	hasClass : function(element,classNames){
		var allClass = element.className.split(' ');//把元素class整体分割
		for (var i = 0; i < allClass.length; i++) {
			if(allClass[i] === classNames){
				return true;
			}
		}
		return false;
	},
	
	addClass : function(element,classNames){
		var allClass = element.className;
		
		if(!hasClass(element,classNames)){
			allClass += " " + classNames; 
		}
		element.className = allClass.trim();
	},
	
	removeClass : function(element,classNames){
		if(hasClass(element,classNames)){
			var allClass = element.className.split(' ');
			for (var i = 0; i < allClass.length; i++) {
				if(allClass[i] === classNames){
					allClass.splice(i,1);//删除指定位置数组中元素1个
					i--;
				}
			}
			//如果这个数组为空就删除class属性
			if(allClass.length === 0){
				element.removeAttribute('class');//删除element下的class
			}else{
				element.className = allClass.join(' ');
			}
		}	
	},
	
	toogleClass : function(){
		if(hasClass(element,classNames)){
			removeClass(element,classNames);
			return false;
		}else{
			addClass(element,classNames);
			return true;
		}
	}
}