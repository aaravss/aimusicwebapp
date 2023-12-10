rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload(){
    song1 = loadSound("i-wanna-feel-110039.mp3");
     song2 = loadSound("twisted-138700.mp3");
 }

function setup(){
    canvas = createCanvas(620,500);
    canvas.position(450,120);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    translate(620,0);
    scale(-1,1);
    image(video,0,0,620,500);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log(rightWristX);
        rightWristY = results[0].pose.rightWrist.y;
        console.log(rightWristY);
        console.log(leftWristX);
        leftWristY = results[0].pose.leftWrist.y;
        console.log(leftWristY);
    }
}