function preload()
{

}

function draw()
{
    image(video, 0, 0, 300, 300);
    fill("white");
    rect(0, 0, 300, 20);
    rect(0, 280, 300, 20);
    rect(0, 0, 20, 300);
    rect(280, 0, 20, 300);

    fill("black");
    circle(15, 15, 36);
    circle(285, 15, 36);
    circle(15, 285, 36);
    circle(285, 285, 36);

    
}

function setup()
{
  canvas = createCanvas(300, 300); 
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function snapshot()
{
   save("p5js_snapshot.png");
}