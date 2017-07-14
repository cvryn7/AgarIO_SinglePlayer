var blob;
var blobs = [];
var stars = [];

function setup() {
    createCanvas(600, 600);
    blob = new Blob(width/2, height/2, 64);
    for (var i = 0; i <50; i++) {
        var x = random(-width, width*2);
        var y = random(-height, height*2);
        blobs[i] = new Blob(x, y, 16);
    }
    for (var i = 0; i < 500; i++) {
        var x = random(-width * 3, width * 3);
        var y = random(-height * 3, height * 3);
        stars[i] = new Star(x, y, 2);
    }
}

function draw() {
    background(0);

    //Make our blob stay at the centre and let the world that is
    //the view move
    translate(width/2-blob.pos.x, height/2-blob.pos.y);

    //we are traversing the array backward because if we are
    //removing things from the array as we are going forward through
    //the array, the elements slides backward from the end and we
    //could skip an element by accident
    for (var i = blobs.length-1; i >= 0; i--) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            blobs.splice(i,1);
        }
    }
    for (var i = 0; i < stars.length; i++) {
        stars[i].show();
    }
    blob.show();
    blob.update();

}