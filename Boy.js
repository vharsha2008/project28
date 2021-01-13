class Boy extends BaseClass {
  constructor(x,y){
    var options = {
      isStatic: true,
  }
    super(x,y,200,200,options);
    this.image = loadImage("spter/boy.png");
  }

  display() {
    
    super.display();
  }
}
