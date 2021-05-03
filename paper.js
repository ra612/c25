class paper{
constructor(x,y,radius){
    var options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options)
    this.r=radius;
    
    World.add(world,this.body);
this.image=loadImage("paper.png");    


}
display(){
imageMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,this.r,this.r)


}




}














