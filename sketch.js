function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
  background(0)//背景是黑色
  noFill()//圖形不上色
  stroke(frameCount%100,80,frameCount%210);//圖形框線顏色會依照指定的規則做變換
  strokeWeight(1)//框線寬度1
  rectMode(CENTER)//方形座標在中心點
	
for (var l=0;l<(width/70);l++){
	for (var j=0;j<(height/70);j++){
rect(35+(70*l),35+(70*j),(frameCount*20)%71+mouseX/10,70+mouseY/5);
rect(70+(70*l),70+(70*j),35+mouseX/10)
ellipse(35+(70*l),35+(70*j),70+mouseX/10)
   }
  }
 }
