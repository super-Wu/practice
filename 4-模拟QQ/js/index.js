//获取变量
var allH = document.getElementsByTagName("h3");
var content = document.getElementsByClassName("content")[0];
var allUl = document.getElementsByClassName("list");
var allLi = $(".list>li");
//定义初始变量
var i;
var j;
var cur = 0;
var str = 0;
//给每一个div添加处理
for(i = 0;i < allH.length;i++){
	//存储每一个div的下标在变量a中
	allH[i].a = i;
	//给每一个div自定义一个属性（开关）
	allH[i].status = true;
	//给每一个div添加点击处理
	allH[i].onclick = function(ev){
		//判断当前div的status（开关）状态
		if(this.status){
			//执行当前事件处理先清空上一次添加的处理
			//allH[cur].className = "";
            //allUl[cur].style.display = "none";	
            //allH[cur].status = true;
            allLi[str].className = "";
            allLi[str].status2 = true;
//	                for(j = 0;j < allLi.length;j++){
//	                	allLi[j].className = "";
//	                }
            //给当前事件添加处理
			this.className = "roster";
			this.children[0].className = "change"
			allUl[this.a].style.display = "block";
			cur = this.a;
			this.status = false;
		}else{
			//当前状态是打开的，点击以后给当前事件还原初始状态（处理清空）
			this.className = "";
			this.children[0].className = ""
			allUl[this.a].style.display = "none";
            this.status = true;
		}
		ev.preventDefault(); 
	}
}
//给每一个li添加处理
console.log(allLi.length)
for(j = 0;j < allLi.length;j++){
	//储存每一个li的下标
	allLi[j].b = j;
	//给每一个li添加一个自己的开关
	allLi[j].status2 = true;
	//给li添加点击处理
	allLi[j].onclick = function(ev){
		//判断li的开关的当前状态，并作出处理
		
		if(this.status2){
			//添加当前事件处理时先清空上一次的事件处理
			allLi[str].className = "";
			allLi[str].status2 = true;
			this.className = "color2";
			str =this.b;
			this.status2 = false;
		}else{
			this.className = "";
			this.status2 = true;
		}
		 ev.preventDefault(); 
	}
	
	allLi[j].onmouseover = function(){
		if(this.status2){
			this.className ="color";
		}
	}
	allLi[j].onmouseout = function(){
		if(this.status2){
			this.className ="";
		}
	}
}