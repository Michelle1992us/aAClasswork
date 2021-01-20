//import Level
import Level from "./level";

export default class FlappyBird {
  constructor(canvas){ //Our Game class receives the canvas HTML element as an argument
    this.ctx = canvas.getContext("2d"); 
    // returns us an instance of the 'drawing context'. 
    //The drawing context will give us methods which will allow us to actually draw shapes on the page
    this.dimensions = { width: canvas.width, height: canvas.height };
    //The dimensions of the canvas are stored as an instance variable
    this.restart()
    //call restart to trigger the first render

  }

  animate() {
    // call animate on your Level class.
    this.level.animate(this.ctx);

  }

  //Make a new method on Game, restart. 
  restart() {
    //create a new instance of Level and store that as an instance variable.
    //Be sure to pass the dimensions of the canvas to the constructor of Level
    this.level = new Level(this.dimensions);

    //call animate on the Game class which should cause the background to be drawn to the screen
    this.animate();
  }
}

