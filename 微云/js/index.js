	//获取所有的按钮  3:重命名  4：删除 5：新建文件夹
    	var allBtns = tools.$("li",tools.$(".content_right_top")[0]);
    	var checkAll = tools.$("#checkAll");//全选按钮
    	var main = tools.$("#main");
    	var aDiv = tools.$("div",main);
    	var Spans = tools.$('span',main);
    	var alert = tools.$("#alert");
    	var changeImg = tools.$("img",alert)[0];
	////////////////////////////1.1.先把已有的数据渲染在页面中/////////////////////////////////////
		//封装一个div工厂函数
    	function addDiv(obj){
			var newDiv = document.createElement('div');//新创建一个div
			newDiv.innerHTML = '<span></span><i class="icon txt"></i>'
							+'<p>'+obj.title+'</p>'
		   	return newDiv;
		};
		
    	//将已有数据渲染到页面中
    	for (var i = 0; i < data.files.length; i++) {
    		if(data.files[i].pid === 0){
    			var newDiv = addDiv(data.files[i]);
    			main.appendChild(newDiv);
    		}
    	}
    	
   ///////////////////////////2. 移入，移出，以及点击的效果//////////////////////////////////// 	
    	//点击选中文件夹，并判断是否被全部选中

    	function fn(){
    		for (var i = 0; i < aDiv.length; i++) {
    			//移入
    			aDiv[i].onmouseover = function(){
    				var oSpan = tools.$('span',this)[0];
    				if(!tools.hasClass(oSpan,'change')){
						oSpan.style.display = "block";
						tools.addClass(this,'mouseover');
					}
    			}
    			//移出
    			aDiv[i].onmouseout = function(){
    				var oSpan = tools.$('span',this)[0];
    				if(!tools.hasClass(oSpan,'change')){
						oSpan.style.display = "none";
						tools.removeClass(this,'mouseover');
					}
    			}
    			//点击选中（关联全选）
    			fn3(i);
    			function fn3(i){
					var aSpan = aDiv[i].children[0];
					aSpan.onclick = function(){
						var checkSpan = tools.$('.change');
						if(!tools.hasClass(this,'change')){
							tools.addClass(this,'change');
						}else{
							tools.removeClass(this,'change');
						}
						if(checkSpan.length === aDiv.length){
							tools.addClass(checkAll,'checkedAll');
						}else{
							tools.removeClass(checkAll,'checkedAll');
						}
					}
					
				}
    		}
    	}

    	fn();
    	//全选
    	checkAll.onclick = function (){
    		if(aDiv.length !== 0){
    			if(!tools.hasClass(checkAll,'checkedAll')){
					tools.addClass(checkAll,'checkedAll');
					for (var i = 0; i < aDiv.length; i++) {
						Spans[i].style.display = "block";	
						tools.addClass(Spans[i],"change");		
						tools.addClass(aDiv[i],"mouseover");
					}
				}else{
					tools.removeClass(checkAll,'checkedAll');
					for (var i = 0; i < aDiv.length; i++) {
						Spans[i].style.display = "none";		
						tools.removeClass(Spans[i],"change");	
						tools.removeClass(aDiv[i],"mouseover");
					}
				}
    		}

		}
    	
 ///////////////////////////3.新建文件夹，添加数据结构//////////////////////////////////   	

    	allBtns[5].onclick = function(){
    		
			var newDiv = document.createElement('div');//新创建一个div
			var newSpan = document.createElement('span');//新创建一个span
			var newI = document.createElement('i');//新创建一个i
			tools.addClass(newI,"icon");
			var newInput = document.createElement('input');//新创建一个input
			newInput.type = "text";
			
			newDiv.appendChild(newSpan);//给newLi尾部追加子节点（span）
			newDiv.appendChild(newI);//给newLi尾部追加子节点（i）
			newDiv.appendChild(newInput);//给newLi尾部追加子节点（input）
			
			main.insertBefore(newDiv,main.firstChild);//给ul尾部追加子节点（div）
			var oInput = tools.$("input",main)[0];
			oInput.focus();
			
			this.isCreate  =true;

			oInput.onblur = function(){
				var val = this.value.trim();
				main.removeChild(this.parentNode);
				if(val !== ''){
					//新建文件夹成功提示框
					changeImg.src = "image/new_win.png";
					MTween(alert,{top:0},500,'linear',function(){
						
						setTimeout(function(){
							MTween(alert,{top:-50},500,'linear')
						},500)
					})
					
					tools.removeClass(checkAll,'checkedAll');
					var newDiv = document.createElement('div');//新创建一个div
					var newSpan = document.createElement('span');//新创建一个span
					var newI = document.createElement('i');//新创建一个i
					tools.addClass(newI,"icon");
					var newP = document.createElement('p');//新创建一个input
					newP.innerHTML = val;
					newDiv.appendChild(newSpan);//给newLi尾部追加子节点（span）
					newDiv.appendChild(newI);//给newLi尾部追加子节点（i）
					newDiv.appendChild(newP);//给newLi尾部追加子节点（p）
					main.insertBefore(newDiv,main.firstChild);//给ul尾部追加子节点（div）
					for (var i = 0; i < aDiv.length; i++) {
						Spans[i].style.display = "none";		
						tools.removeClass(Spans[i],"change");	
						tools.removeClass(aDiv[i],"mouseover");
					}
					fn();
				}
				allBtns[5].isCreate  = true;
			}
			fn();	
		}
    	
   ///////////////////////////3.删除文件夹，删除数据结构//////////////////////////////////    	
    	allBtns[4].onclick = function(){
    	var checkSpan = tools.$('.change');
    	
    	if(checkSpan.length === 0){
    		//删除时没有选择文件或没有文件时候提示框
    		
    		changeImg.src = "image/newName_no.png";
    		if(alert.timer)return;
			MTween(alert,{top:0},500,'linear',function(){
				setTimeout(function(){
					MTween(alert,{top:-50},500,'linear')
				},1500)
				
			})
    	}else{
    		for(var i = 0; i < checkSpan.length; i++) {
	    		var parent = checkSpan[i].parentNode;
	    		main.removeChild(parent);
	    		i--;
	    	}
			
			if(aDiv.length === 0){
				tools.removeClass(checkAll,'checkedAll');
			}
			//删除成功提示框
			if(alert.timer)return;
			changeImg.src = "image/delet_win.png";
			MTween(alert,{top:0},500,'linear',function(){
				setTimeout(function(){
					MTween(alert,{top:-50},500,'linear')
				},500)
			})
    	}
    	
    }
    	
    	
    //////////////////////4.碰撞框选//////////////////////////////////////////////////
    
    //先有一个框
	document.onmousedown = function (ev){
		
		if(allBtns[5].isCreate) return;
		if(allBtns[3].isCreate)return;
		var newDiv = null;
		var disX = ev.clientX;
		var disY = ev.clientY;
		document.onmousemove = function (ev){

			if( Math.abs(ev.clientX - disX) > 20 ||  Math.abs(ev.clientY - disY) > 20 ){

				if( !newDiv ){

					newDiv = document.createElement("div");
					newDiv.className = "dialog";
					newDiv.style.left = disX + "px";
					newDiv.style.top = disX + "px";

					document.body.appendChild(newDiv);
				}


				newDiv.style.width = Math.abs(ev.clientX - disX) + "px";
				newDiv.style.height = Math.abs(ev.clientY - disY) + "px";

				newDiv.style.left = Math.min(ev.clientX , disX)+1 + "px";
				newDiv.style.top = Math.min(ev.clientY , disY)+1 + "px";

		
				for( var i = 0; i < aDiv.length; i++ ){
					if( duang(newDiv,aDiv[i]) ){
						
						tools.addClass(aDiv[i],'mouseover');
						aDiv[i].children[0].style.display = "block";
						tools.addClass(aDiv[i].children[0],'change');
					}else{
						tools.removeClass(aDiv[i],'mouseover');
						aDiv[i].children[0].style.display = "none";
						tools.removeClass(aDiv[i].children[0],'change');
					}
				}
				
				fn4();
				//判断全选
				function fn4(){
					for (var j = 0; j < aDiv.length; j++) {
						var checkSpan = tools.$('.change');
						if(checkSpan.length === aDiv.length){
							tools.addClass(checkAll,'checkedAll');
						}else{
							tools.removeClass(checkAll,'checkedAll');
						}
					}
				}

			}

		};
		document.onmouseup = function (){
			document.onmousemove = null;

			if( newDiv ){
				document.body.removeChild(newDiv);
			}
		}
		ev.preventDefault();
	};
    
/////////////////////////////////////5.重命名//////////////////////////////////////////////////  
    
    allBtns[3].onclick = function(){
    	
    	var checkSpans = tools.$('.change');
		if(checkSpans.length === 1){
			var parent = checkSpans[0].parentNode;
			var val = parent.lastElementChild.innerHTML;
			var newInput = document.createElement('input');//新创建一个input
			parent.removeChild(parent.lastElementChild);
			newInput.type = "text";
			newInput.value = val
			parent.appendChild(newInput);
			var oInput = tools.$("input",parent)[0];
			oInput.focus();
			this.isCreate  =true;
			oInput.select();
			oInput.onblur = function(){
				allBtns[3].isCreate  = false;
				var val1 = this.value.trim();
				var parent = this.parentNode;
				if(val1 !== ''){
					parent.removeChild(this);
					var newP = document.createElement('p');//新创建一个p
					newP.innerHTML = val;
					parent.appendChild(newP);//给div尾部追加子节点（p）
					if(val !== val1){
						//弹出重命名成功
						if(alert.timer)return;
						changeImg.src = "image/newname_win.png";
						alert.style.opacity = 1;
						MTween(alert,{top:0},500,'linear',function(){
							setTimeout(function(){
								MTween(alert,{top:-50},500,'linear')
							},500)
						})
					}
					
				}else{
					changeImg.src = "image/newname_win.png";
					if(alert.timer)return;
					MTween(alert,{top:0},500,'linear',function(){
						setTimeout(function(){
							MTween(alert,{top:-50},500,'linear')
						},500)
					})
				}
			}
			
		}else if(checkSpans.length > 1){
			changeImg.src = "image/newname-2.png";
			if(alert.timer)return;
			MTween(alert,{top:0},500,'linear',function(){
				setTimeout(function(){
					MTween(alert,{top:-50},500,'linear')
				},500)
			})
		}else{
			changeImg.src = "image/newName_no.png";
			if(alert.timer)return;
			MTween(alert,{top:0},500,'linear',function(){
				setTimeout(function(){
					MTween(alert,{top:-50},500,'linear')
				},500)
			})
		}

    }
