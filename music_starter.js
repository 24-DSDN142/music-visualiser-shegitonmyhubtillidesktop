let img;
let imgrun = true
var Xmove = 25;
var Xmove2 = 25;
var Xmove3 = 25;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0, 251, 255)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  if(imgrun){
    img = loadImage('Unicorn.png')
   imgrun = false
  }

 let basss = map(bass, 1, 10, 16, 20)
 let others = map(other, 1, 10, 16, 25)
 let drumpmap = map(drum, 0, 25, 50, 125)
 let vocals = map(vocal, 1, 10, 16, 20)
  
  stroke(191, 0, 0);//top rainbow top right side
  strokeWeight(9.5);
  line(279, -50, 600, 267);

  stroke(255, 77, 0);
  strokeWeight(9.5);
  line(268, -50, 600, 278);

  stroke(255, 208, 0);
  strokeWeight(9.5);
  line(257, -50, 600, 290);

  stroke(30, 255, 0);
  strokeWeight(9.5);
  line(246, -50, 600, 301);

  stroke(0, 110, 255);
  strokeWeight(9.5);
  line(235, -50, 600, 312);

  stroke(247, 0, 255,);
  strokeWeight(9.5);
  line(224, -50, 600, 323);//top rainbow end

  stroke(191, 0, 0);//bottom rainbow bottom left side
  strokeWeight(9.5);
  line(279, 1050, 0, 734);
 
  stroke(255, 77, 0);
  strokeWeight(9.5);
  line(290, 1050, 0, 723);

  stroke(255, 208, 0);
  strokeWeight(9.5);
  line(301, 1050, 0, 712);

  stroke(30, 255, 0);
  strokeWeight(9.5);
  line(312, 1050, 0, 701);

  stroke(0, 110, 255);
  strokeWeight(9.5);
  line(323, 1050, 0, 690);
  
  stroke(247, 0, 255,);
  strokeWeight(9.5);
  line(334, 1050, 0, 679);//bottom rainbow top

  image(img, 250, 250);// unicorn

  fill(255)
  strokeWeight(1.5)
  stroke(0)
  line(170, 400, 320, 380)//speech bubble line
  ellipse(170, 400, 250, vocals+50)//speech bubble
  strokeWeight(1)

  fill(0)
  text(words, 130, 420, others, others)
  stroke(255, 245, 48)
  fill(255, 245, 48)
  ellipse(535, 0, 150)
  rect(415, 15, basss, 20)
  rect(525, 120, 20, basss)
  rotate(45) + rect(375, -270, 20, basss)//sun
  rotate(-45)

  stroke(drumpmap-100, 255, drumpmap-100)
  fill(drumpmap-100, 255, drumpmap-100)//Green
  triangle(255, 285, 50, 50, 25, 130)
  stroke(255, drumpmap-100, drumpmap-100)
  fill(255, drumpmap-100, drumpmap-100)//Red
  triangle(255, 285, 50, 50, 42, 75)
  stroke(drumpmap-100, drumpmap-100, 255)
  fill(drumpmap-100, drumpmap-100, 255)//Blue
  triangle(255, 285, 33, 105, 25, 130)//unicorn ray

  fill(255)
  stroke(255)//cloud 1 begin
  ellipse(-100+Xmove, 150, 100);
  ellipse(-200+Xmove, 150, 100);
  ellipse(-150+Xmove, 100, 100);
  rect(-150+Xmove, 150, 100);//cloud 1 end

  Xmove = Xmove + 1;
  if(Xmove > 800){
  Xmove = 0}

  ellipse(-1250+Xmove2, 850, 100)
  ellipse(-1150+Xmove2, 850, 100)
  ellipse(-1200+Xmove2, 800, 100)
  rect(-1200+Xmove2, 850, 100)//cloud 2 Bottom Right

  Xmove2 = Xmove2 + 1;
  if(Xmove2 > 2200){
    Xmove2 = 0}

  ellipse(-750+Xmove3, 685, 100)
  ellipse(-650+Xmove3, 685, 100)
  ellipse(-700+Xmove3, 635, 100)
  rect(-700+Xmove3, 685, 100)//cloud 3

  Xmove3 = Xmove3 + 1;
  if(Xmove3 > 1900){
    Xmove3 = 0}
}