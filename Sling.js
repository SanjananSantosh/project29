class Sling{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:1
        }
        this.sling=Constrait.create(options);
        this.pointB=pointB;
        world.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;

            strokeWeight(4);
            stroke("turquoise")
            line(point.x,point.y,pointB.x,pointB.y)
        }
    }
}