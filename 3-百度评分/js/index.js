var images = tools.$("img",tools.$("#list"));
var evaluate = tools.$(".evaluate")[0];//evaluate评价

//评价初始化
function Initialization(){
	for (var i = 0; i < images.length; i++) {
		images[i].src = "img/1.png";
		evaluate.innerHTML = '<img src="img/initial.png"/>';
	}
}

var arrSpan = ['很差!','较差!','还行!','推荐!','力荐!'];
function score(n){
	for (var i = 0; i < n+1; i++) {
		switch(true){
			case n < 2 :
			images[i].src = "img/2.png";
			evaluate.innerHTML = arrSpan[n];
			break;
			case n >= 2 :
			images[i].src = "img/3.png";
			evaluate.innerHTML = arrSpan[n];
			break;
		}
	}
}
var indexNow = -1;
for (var i = 0; i < images.length; i++) {
	images[i].index = i;
	images[i].onmouseover = function(){
		Initialization();
		score(this.index);
	}
	
	images[i].onmouseout = function(){
		Initialization();
		score(indexNow);
	}
	
	images[i].index2 = i;
	images[i].onclick = function(){
		indexNow = this.index2;
	}	
}