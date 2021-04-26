class Slingshot{
    constructor(bodyA, objectB){
        var options = {
            bodyA: bodyA,
            pointB: objectB,
            stiffness: 0.04,
            length: 10
        }
        this.objectB=objectB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
    this.sling.bodyA=null
}
    display(){
        if(this.sling.bodyA){

      
        var pointA = this.sling.bodyA.position;
        var pointB = this.objectB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}  
}