//The Level class will be responsible for drawing the background and the 'pipes', which are the objects that the bird will be flapping through.


//The Level class, its constructor receives the dimensions from the Game class and stores them
export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }


  //When invoked by the animate method, the drawBackground() method receives the context as an argument, then draws the background on the canvas using the fillRect method to fills the entire canvas.
  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}