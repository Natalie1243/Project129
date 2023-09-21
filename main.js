song1 = "music.mp3";
song2 = "music2.mp3";
scoreLeftWrist = 0;
songStatus = "song1.isPlaying()";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}


function setup() {
canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function draw() {
image(video, 0, 0, 600, 500);
song1.isPlaying();

fill('#FF0000'); 
stroke('#FF0000');  

if(scoreLeftWrist > 2) {
circle(leftWristX, leftWristY, 20); circle(rightWristX, rightWristY, 20);
song2.stop();
}

if(song1.isPlaying()) {
    song1.play();
    document.getElementById("song1").innerHTML = "song 1";
}

}

function modelLoaded() {
    console.log('PoseNet is intialized');
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
scoreLeftWrist = results[0].pose.keypoints[9].score;
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = "+ rightWristX+"rightWristY = "+ rightWristY);
}
}








