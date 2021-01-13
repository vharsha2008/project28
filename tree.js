class Tree extends BaseClass {
    constructor(x,y,options){
      var options = {
        isStatic: true
        
    }
      super(x,y,250,300,options);
      this.image = loadImage("spter/tree.png");
    }
  
    display() {
      
      super.display();
    }
  }
  