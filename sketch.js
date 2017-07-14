var blob;

var blobs = [];

function setup() {
    createCanvas(600, 600);
    blob = new Blob(width/2, height/2, 64);
    for (var i = 0; i <50; i++) {
        var x = random(-width, width*2);
        var y = random(-height, height*2);
        blobs[i] = new Blob(x, y, 16);
    }
}

function draw() {
    background(0);

    translate(width/2-blob.pos.x, height/2-blob.pos.y)

    //we are traversing the array backward because if we are
    //removing things from the array as we are going forward through
    //the array, the elements slides backward from the end and we
    //could skip an element by accident
    for (var i = blobs.length-1; i >= 0; i--) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            console.log("hit");
            blobs.splice(i,1);
        }
    }
    blob.show();
    blob.update();

}