rightearX = 0;
rightearY = 0;
leftearX = 0;
leftearY = 0;
leftearScore = 0;
song1status = "";
song2status = "";


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
    fill("#FF00E1");
    stroke("#FF00E1");
    song1status = song1.isPlaying();
    if(leftearScore>0.8){
        circle(leftearX, leftearY, 20);
        song2.stop();
        if(song1status == false){
            song1.play();
            document.getElementById("song").innerHTML = "Song: I Wanna Feel";
        }
    }
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log(rightearX);
        rightearY = results[0].pose.rightEar.y;
        rightearX = results[0].pose.rightEar.x;
        console.log(rightearY);
        console.log(leftearX);
        leftearY = results[0].pose.leftEar.y;
        leftearX = results[0].pose.leftEar.x;
        console.log(leftearY);
        leftearScore = results[0].pose.keypoints[3].score;
    }
}