//Blob is filled circle which moves
//on the screen according to user input
//takes x and y positions, and radius
function Blob(x, y, radius) {
    this.pos = createVector(x, y);
    this.radius = radius; // initial radius of the blob

    this.update = () => {
        var velocity = createVector(mouseX, mouseY);
        velocity.sub(this.pos);
        //set magnitude set the magnitude of vector to 3, no what how long it is
        //its length will be set to 3.
        velocity.setMag(3);
        //this will move our blob toward the direction of mouse
        this.pos.add(velocity);
    }

    this.show = function() {
        fill(255); // blob color
        ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
    }
}