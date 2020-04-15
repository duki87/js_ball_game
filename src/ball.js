import { collision } from "./collision";

export default class Ball {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.image = document.getElementById("ball");
    this.speed = {
      x: 4,
      y: 2
    };
    this.position = {
      x: 10,
      y: 10
    };
    this.size = 16;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    //Wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    //Wall on top or bottom
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    // //Collision with paddle
    // let ballBottom = this.position.y + this.size;
    // let paddleTop = this.game.paddle.position.y;
    // let paddleLeft = this.game.paddle.position.x;
    // let paddleRight = this.game.paddle.position.x + this.game.paddle.width;
    // if (
    //   ballBottom >= paddleTop &&
    //   this.position.x >= paddleLeft &&
    //   this.position.x + this.size <= paddleRight
    // ) {
    //   this.speed.y = -this.speed.y;
    //   this.position.y = this.game.paddle.position.y - this.size;
    // }
    if (collision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
