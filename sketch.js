
var vehicle;


function setup() {
 createCanvas(640, 360);
 setFrameRate(60);
 vehicle = new Vehicle();


}

function draw(){
	background(255);

	vehicle.display();

}

function mousePressed(){
	//particleSystems.push(new Vehicle(1,createVector(mouseX,mouseY)));
}

