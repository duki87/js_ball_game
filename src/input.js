export default class InputHandle {
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
        case 27:
          game.pause();
          break;
        case 32:
          console.log(game);
          game.start();
          break;
        default:
          console.log("default");
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) {
            paddle.stop();
          }
          break;
        case 39:
          if (paddle.speed > 0) {
            paddle.stop();
          }
          break;
        default:
          return;
      }
    });
  }
}
