//Blob is filled circle which moves
//on the screen according to user input
//takes x and y positions, and radius
function Blob(x, y, radius, r, g, b) {
    this.pos = createVector(x, y);
    this.radius = radius; // initial radius of the blob
    this.velocity = createVector(0.0);
    this.r = r;
    this.g = g;
    this.b = b;

    this.update = () => {

        //Mouse position is relative to the main window. Since our blob is always
        //at centre relative to main window, then the mouse position when at centre
        // should not move the object in any direction. That is why it is necessary
        //to subtract half the width and height from x and y, respectively.
        var newVelocity = createVector(mouseX - width/2, mouseY - height/2);

        //set magnitude set the magnitude of vector to 3, no what how long it is
        //its length will be set to 3.
        newVelocity.setMag(3);
        this.velocity.lerp(newVelocity, 0.05);
        //this will move our blob toward the direction of mouse
        this.pos.add(this.velocity);
    }

    //Checks if our blob eats other blob by
    //calculating the distance difference
    this.eats = (otherBlob) => {
        var d = p5.Vector.dist(this.pos, otherBlob.pos);
        if (d < this.radius + otherBlob.radius) {
            var sumArea = PI * this.radius * this.radius + PI * otherBlob.radius * otherBlob.radius;
            this.radius = sqrt(sumArea/PI);
            this.r = otherBlob.r;
            this.g = otherBlob.g;
            this.b = otherBlob.b;
            return true;
        } else {
            return false;
        }
    }

    //Render the blob
    this.show = () => {
        fill(this.r, this.g, this.b); // blob color
        ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
    }
}