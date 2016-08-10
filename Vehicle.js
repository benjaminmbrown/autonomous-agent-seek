var Vehicle = function(x,y){
	this.acceleration = createVector(0,0);
	this.velocity = createVector(0,-2);
	this.position = createVector(x,y);
	this.r = 6;
	this.maxSpeed = 4;
	this.maxForce = 0.1

	this.seek = function(target){
		var desired = p5.Vector.sub(target,this.position);
		//desired.normalize();
		desired.setMag(this.maxSpeed);
		var steer = p5.Vector.sub(desired,this.velocity);
		steer.limit(this.maxForce);
		this.applyForce(steer);
	}

	this.update = function(){//Standard Euler integration motion

		this.velocity.add(this.acceleration);
		this.velocity.limit(this.maxSpeed);
		this.position.add(this.velocity);
		this.acceleration.mult(0);

		//TODO: max force and speed vary based on life

	}

	this.applyForce = function(force){
		this.acceleration.add(force);
	}

	this.display = function(){
		var theta = this.velocity.heading() + PI/2;
		fill(127);
		stroke(200);
		strokeWeight(1);
		push();
		translate(this.position.x,this.position.y);
		rotate(theta);
		beginShape();
		vertex(0, -this.r*2);
		vertex(-this.r,this.r*2);
		vertex(this.r, this.r*2);
		endShape(CLOSE);
		pop();
	}

	//inverse of seek 
	this.flee = function(){

	}

	this.pursue = function(){

	}


}