class Mongo extends BaseClass {
    constructor(x,y){
      var options = {
        isStatic: true,
        restition:0,
        friction:1,

    }
      super(x,y,50,50);
      this.image = loadImage("spter/mango.png");
    }
  
    display() {
      
      super.display();
    }
  }
  