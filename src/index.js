import "./styles.css";
import Paddle from "./paddle";
let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 800, 600);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  //console.log(timestamp);
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();
