class Box{
   constructor(x,y,width,height){
     var options={
       restitution : 0.4 ,
       friction : 1.0,
       density : 1.0
     }
       this.visibilty = 225
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
   }
      display(){
       if(this.body.speed < 3){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("lightblue")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
       }
       else{
         World.remove(world,this.body)
         push();
         this.visibility = this.visibilty - 5;
         pop();
       }
      }
}





//class Box{
    //constructor(x, y, width, height) {
   // var options = {
          //  'restitution':0.8,
           //'friction':1.0,
         //  'density':1.0
       // }
       // this.body = Bodies.rectangle(x, y, width, height, options);
     // this.width = width;
       // this.height = height;
       // World.add(world, this.body);
     // }
   // display(){
        //push();
        //translate(this.body.position.x, this.body.position.y);
       // rectMode(CENTER);
        //rect(this.body, 0, 0, this.width, this.height);
      //  pop();
     // }
   // }