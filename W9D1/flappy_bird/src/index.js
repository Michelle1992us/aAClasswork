//import Game into index.js
import FlappyBird from './game';

//find the canvas using getElementById
const canvas = document.getElementById('bird-game');
//create a new instance of Game using the canvas you found
new FlappyBird(canvas);