var vehicle;


function setup() {
    createCanvas(640, 360);
    setFrameRate(15);
    vehicle = new Vehicle(width / 2, height / 2);


}

function draw() {
    background(255);
    var mouse = createVector(mouseX, mouseY);


    fill(127);
    stroke(200);
    strokeWeight(2);
    ellipse(mouse.x, mouse.y, 48, 48);

    //the difference between previous and
    //current x position is the horizontal mouse speed
    var xSpeed = abs(winMouseX - pwinMouseX);
    var ySpeed = abs(winMouseY - pwinMouseY);

    
    
    line(mouse.x, mouse.y, mouse.heading(), mouse.mag());

    //ellipse(enemy.x,enemy.y, 48,48);

    vehicle.pursue(mouse);
    vehicle.update();
    vehicle.display();

}
