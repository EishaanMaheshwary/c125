noseX = 0;
noseY = 0;
left_wrist = 0;
right_wrist = 0;
difference = 0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    background('#5c5b5b');
    fill('pink');
    stroke('pink');
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.leftWrist.x;
        difference = floor(right_wrist - left_wrist);
        

    }
}