var blob;
var blobs = [];
var stars = [];
var zoom = 1;
var scores = 0;
var scorePara;

function setup() {
    createCanvas(600, 600);
    blob = new Blob(width/2, height/2, 64, 255, 255, 255);
    for (var i = 0; i <200; i++) {
        var x = random(-width*3, width*3);
        var y = random(-height*3, height*3);
        blobs[i] = new Blob(x, y, 16, random(255), random(255), random(255));
    }
    for (var i = 0; i < 500; i++) {
        var x = random(-width * 3, width * 3);
        var y = random(-height * 3, height * 3);
        stars[i] = new Star(x, y, 2);
    }

    scorePara = document.getElementById("scores");
    scorePara.innerHTML = "<h1>Scores: " + scores + "</h1>"

}

function draw() {
    if (scores < 200) {
        background(0);

        /**
         * Fix our blob in the centre and let the world
         * move around it. also scale the world down as
         * our blob's radius increases.
         */
        //First move the world to the center of the window
        translate(width / 2, height / 2);
        //then scale the world down by the ratio our blob's radius increased
        var newzoom = 64 / blob.radius;
        zoom = lerp(zoom, newzoom, 0.1); // smooth the action of scaling down
        scale(zoom);
        //Now translate the world in the opposite direction of our blob's movement
        translate(-blob.pos.x, -blob.pos.y)
        blob.show();

        //we are traversing the array backward because if we are
        //removing things from the array as we are going forward through
        //the array, the elements slides backward from the end and we
        //could skip an element by accident
        for (var i = blobs.length - 1; i >= 0; i--) {
            blobs[i].show();
            if (blob.eats(blobs[i])) {
                blobs.splice(i, 1);
                scores++;
                scorePara.innerHTML = "<h1 style=\"color:rgb("+Math.round(blob.r) + "," + Math.round(blob.g) + "," + Math.round(blob.b) + ");\">Scores: " + scores + "</h1>"
                //scorePara.innerHTML = "<h1 style=\"color:rgb(100.50,150.47,200.70)\">Scores: " + scores + "</h1>"
            }
        }
        for (var i = 0; i < stars.length; i++) {
            stars[i].show();
        }

        blob.update();
    } else {
        background(0);

        //First move the world to the center of the window
        translate(width / 2, height / 2);
        //then scale the world down by the ratio our blob's radius increased
        var newzoom = 64 / blob.radius;
        zoom = lerp(zoom, newzoom, 0.1); // smooth the action of scaling down
        scale(zoom);
        //Now translate the world in the opposite direction of our blob's movement
        translate(-blob.pos.x, -blob.pos.y)
        blob.show();
        blob.show();
        blob.update();
        for (i = 0; i < 200; i++) {
            fill(random(255), random(255), random(255));
            textSize(random(50, 70));
            textStyle(BOLD);
            text("YOU WON!", random(-width*4, width*4), random(-height*4, height*4));
        }

        for (var i = 0; i < stars.length; i++) {
            stars[i].show();
        }
        fill(random(255), random(255), random(255));
        textSize(100);
        textStyle(BOLD);
        text("YOU WON!", blob.pos.x-130, blob.pos.y-height/2 + 160);
    }

}