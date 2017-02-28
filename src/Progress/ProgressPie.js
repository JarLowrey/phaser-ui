/*
Original: http://jsfiddle.net/lewster32/0yvemxnw/
*/
import Progress from './Progress';

export default class PieProgress extends Progress {
  constructor(game,
    radius,
    texture,
    innerGraphicOffset,
    text, frontColor, fontStyle) {

    super(game, radius, radius, texture,
      innerGraphicOffset,
      text, frontColor, fontStyle);

    this.frontGraphic.angle = -90;
  }

  _applyCrop() {
    this.frontGraphic.visible = this._progress != Progress.MaxProgress;
    if (this.frontGraphic.visible) {

      let radius = this.frontGraphic.height / 2;
      let color = '#fff';
      //let color = Phaser.Color.valueToColor(this._getColor());
      //color = 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      let new_angle = (this.reversed) ? (Math.PI * 2) * this.progress : (Math.PI * 2) * (1 - this.progress);

      this.frontBmd.clear();
      this.frontBmd.ctx.fillStyle = color;
      this.frontBmd.ctx.beginPath();
      this.frontBmd.ctx.arc(radius, radius, radius, 0, new_angle, true);
      this.frontBmd.ctx.lineTo(radius, radius);
      this.frontBmd.ctx.closePath();
      this.frontBmd.ctx.fill();

      this.frontBmd.update();
      this.frontGraphic.tint = this._getColor();
    }
  }

}
