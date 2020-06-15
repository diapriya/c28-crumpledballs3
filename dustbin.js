class Dustbin{

  constructor (x,y,width,height){

    var options1={
      isStatic:true,
      friction : 1,
      restitution : 0.1
      
    };
 
    this.body = Bodies.rectangle(x,y,width,height, options1);
    this.width = width;
    this.height =height;
    this.image = loadImage("./img/dustbingreen.png");
    
    World.add(world,this.body);

  }

  display(){
      var pos = this.body.position;
      fill("white");
      rect(pos.x,pos.y,this.width,this.height);
      imageMode(CENTER);
       
      image(this.image, 632,600 ,this.image.width * 0.7,this.image.height * 0.35);
  }

}