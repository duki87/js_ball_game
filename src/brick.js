import { collision } from "./collision";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("wall");
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.position = position;
    this.width = 80;
    this.height = 24;
    this.markedForDetection = false;
  }

  update() {
    if (collision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDetection = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
