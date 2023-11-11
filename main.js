function preload(){
    song1 = loadSound("i-wanna-feel-110039.mp3");
     song2 = loadSound("twisted-138700.mp3");
 }

function setup(){
    canvas = createCanvas(620,500);
    canvas.position(450,120);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    translate(620,0);
    scale(-1,1);
    image(video,0,0,620,500);
}