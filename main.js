song = "";
song2="";
function preload() {
    song = loadSound("cm.mp3");
    song2 = loadSound("jp.mp3");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(400,200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 400);
}

function sound() {
    song.play();
    song2.play();
}
