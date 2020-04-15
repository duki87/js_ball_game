import Paddle from "./paddle";
import InputHandle from "./input";
import Ball from "./ball";
import Brick from "./brick";
import { buildLevel, level1 } from "./level";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    let wall = buildLevel(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...wall];
    new InputHandle(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => {
      object.update(deltaTime);
    });
    this.gameObjects = this.gameObjects.filter(
      object => !object.markedForDetection
    );
  }

  draw(ctx) {
    this.gameObjects.forEach(object => {
      object.draw(ctx);
    });
  }
}
