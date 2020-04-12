import Paddle from "./paddle";
import InputHandle from "./input";
import Ball from "./ball";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.gameObjects = [this.ball, this.paddle];
    new InputHandle(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => {
      object.update(deltaTime);
    });
  }

  draw(ctx) {
    this.gameObjects.forEach(object => {
      object.draw(ctx);
    });
  }
}
