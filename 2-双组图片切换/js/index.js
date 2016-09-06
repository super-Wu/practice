var lastOne = tools.$("#pre");
var nextOne = tools.$("#next");
//左边图片
var imagesL = tools.$("#imagesL");
var subL = tools.$("#subL");
var sountL = tools.$("#sountL");
//右边图片
var imagesR = tools.$("#imagesR");
var subR = tools.$("#subR");
var sountR = tools.$("#sountR");

//将第一组(左)照片存储在数组arrL中
var arrL = ["1a.jpg","2a.jpg","3a.jpg","4a.jpg","5a.jpg","6a.jpg","7a.jpg"];
//将第二组(右)照片存储在数组arrR中
var arrR = ["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg","b6.jpg","b7.jpg"];

//初始值
sountL.innerHTML = 1 + "/" + (arrL.length);
sountR.innerHTML = 1 + "/" + (arrR.length);

var i = 0;
var j = 0;

function switchImg(a,b){
	a = a || i;
	b = b || j;
	imagesL.src = "img/"+ arrL[a];
	subL.innerHTML = "第一组第"+(a+1)+"张";
	sountL.innerHTML = (a+1) + "/" + (arrL.length);
	
	imagesR.src = "img/"+ arrR[b];
	subR.innerHTML = "第一组第"+(b+1)+"张";
	sountR.innerHTML = (b+1) + "/" + (arrR.length);
}

lastOne.onclick = function(){
	i--;
	j--;
	if(i < 0)i = arrL.length - 1;
	if(j < 0)j = arrR.length - 1;
	switchImg(i,j);
}

nextOne.onclick = function(){
	i++;
	j++;
	if(i > arrL.length - 1)i = 0;
	if(j > arrR.length - 1)j = 0;
	switchImg(i,j);
}

imagesL.onclick = function(){
	i++;
	if(i > arrL.length - 1)i = 0;
	switchImg(i);
}
imagesR.onclick = function(){
	j++;
	if(j > arrR.length - 1)j = 0;
	switchImg(j);
}
