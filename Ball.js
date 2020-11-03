class Ball{
    constructor(x,y,r){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world, this.body);
    }
   
    display(){
        var pos = this.body.position;
        translate(pos.x, pos.y);
        ellipse(pos.x, pos.y,this.r);

    }

    
}