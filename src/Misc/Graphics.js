/*
 * Graphics
 * Contains some pretty pre-defined graphics objects
 */
export default class Graphics {

  static roundedRectBmd(game, width, height) {
    const radius = height / 2;
    var bmd = game.add.bitmapData(width, height);

    bmd.circle(radius, radius, radius, '#ffffff');
    bmd.circle(width - radius, radius, radius, '#ffffff');

    bmd.ctx.fillStyle = '#ffffff'; //bar must have pure white bitmap data in order to be tinted effectively
    bmd.ctx.beginPath();
    bmd.ctx.rect(radius, 0, width - radius * 2, height);
    bmd.ctx.fill();

    return bmd;
  }

  static getBitmapData(game, input, width, height) {
    let bmd = null;

    if (typeof input == 'function') {
      bmd = input(game, width, height);
    } else if (input instanceof Phaser.Image) {
      bmd = game.make.bitmapData(width, height);
      bmd.copy(input);
    }

    return bmd;
  }
}
