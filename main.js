function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}
function modelLoaded()
{
    console.log("PoseNet is intialized")
}
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + " noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWristX = "+ leftWristX + "rightWristX" + rightWristX + "difference = " + difference);
}
function modelLoaded()
{
console.log('poseNet is initialized!');
}

function draw()
{
document.getElementById("square_side").innerHTML = "Width and height of a Square will be = " + difference + "px";
background('#969A97');
fill('#F90093');
stroke('#F90093');
square(noseX, noseY, difference);
}