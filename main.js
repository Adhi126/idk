noseX=0;
noseY=0;

function Preload() {
    https://i.postimg.cc/3RZ0bdbf/png-transparent-moustache-mustache-hair-beard-mustache-png-thumbnail.png

}

function Setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is Initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function Draw() {
image(video, 0, 0, 300,300);
image(clown_nose, noseX, noseY, 30, 30)

}

function take_snapshot(){
    save('my FilterImage.png');
}