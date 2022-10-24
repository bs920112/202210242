function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	background(0)
	noFill()//畫出來的圖形不上色
  stroke(((frameCount%255)+(frameCount*3))%255,frameCount%255,frameCount*100%255);
  //橢圓會依照指定的規則做變換
  strokeWeight(2)//框線寬度設置為2
	rectMode(CENTER)//設定方形座標在中心點
	for(var x=60;x<width;x=x+140)
	  	{	
	for(var y=60;y<height;y=y+140)
				{	 
var a = map(mouseX,0,width,0,60);
ellipse(x,y,140+a,(frameCount*20)%160+a);//畫出多個位置依序排列，
//寬為140+a且每次繪畫其高度會依照時間乘上20除上160的餘數+a改變
ellipse(x,y,(frameCount*20)%148+a,160+a);//畫出多個位置依序排列，
//高為160+a且每次繪畫其寬度會依照時間乘上20除上148的餘數+a改變
rect(x,y,160+a)////畫出多個位置依序排列，長寬為150+a的方形
circle(x,y,(frameCount*20)%50+a)//畫出多個位置依序排列，
//圓形每次繪畫其直徑會依照時間乘上20除上50的餘數+a改變
}
}
}