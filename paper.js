class Paper{
  constructor(x,y,radius){

      var options3={
        isStatic : false,
        restitution : 0.1,
        friction : 1, 
        density : 0.5

      }

      this.body = Bodies.circle(x,y,radius, options3);
      this.radius = radius;
      this.image = loadImage("img/paper.png");
      World.add(world,this.body);
  }

  display(){

    var pos = this.body.position;
    image(this.image, pos.x -50,pos.y -47,this.image.width * 0.4,this.image.height *0.4);
  }
}
