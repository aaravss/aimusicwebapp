righteyeX = 0;
righteyeY = 0;
lefteyeX = 0;
lefteyeY = 0;
lefteyeScore = 0;
righteyeScore = 0;
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
    if(lefteyeScore>0.985){
        circle(lefteyeX, lefteyeY, 20);
        song2.stop();
        if(song1status == false){
            song1.play();
            document.getElementById("song").innerHTML = "Song: I Wanna Feel";
        }
    }
    song2status = song2.isPlaying();
    if(righteyeScore>0.985){
        circle(righteyeX, righteyeY, 20);
        song1.stop();
        if(song2status == false){
            song2.play();
            document.getElementById("song").innerHTML = "Song: Twisted";
        }
    }
    if(righteyeScore>0.985 && lefteyeScore>0.985){
        song1.stop();
        song2.stop();
        document.getElementById("song").innerHTML = "You must cover one eye to play a song!";
    }
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        righteyeY = results[0].pose.rightEye.y;
        righteyeX = results[0].pose.rightEye.x;
        console.log(righteyeY);
        console.log(righteyeX);
        lefteyeY = results[0].pose.leftEye.y;
        lefteyeX = results[0].pose.leftEye.x;
        console.log(lefteyeY);
        console.log(lefteyeX);
        lefteyeScore = results[0].pose.keypoints[1].score;
        righteyeScore = results[0].pose.keypoints[2].score;
    }
}