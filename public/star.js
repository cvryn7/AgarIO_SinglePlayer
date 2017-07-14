//Star to just show on background
function Star(x, y, radius) {
    this.pos = createVector(x, y);
    this.radius = radius; // radius of star
    var r = random(255);
    var g = random(255);
    var b = random(255);

    //Render the star
    this.show = () => {

        fill(r,g,b); // star color
        ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
    }
}