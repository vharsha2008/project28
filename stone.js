class stone extends BaseClass {
  constructor(x,y){
    var options = {
      isStatic: false,
      restition:0,
      friction:1,
      density:1.2
  }
    super(x,y,30,30,options);
    this.image = loadImage("spter/stone.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
