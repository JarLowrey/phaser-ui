/*
Original: http://jsfiddle.net/lewster32/0yvemxnw/
*/
import Progress from './Progress'

export default class PieProgress extends Phaser.Group {
    constructor(game, x, y, radius, color, angle, text) {
        super(game, x, y);

        this._radius = radius;
        this._progress = 1;
        this.bmp = this.game.add.bitmapData(radius * 2, radius * 2);
        this.loadTexture(this.bmp);

        this.anchor.setTo(0.5, 0.5);
        this.angle = angle || -90;
        this.color = color || '#fff';
        this.updateProgress();

        this._text = this.game.add.text(0, 0, text, {
            font: '26px papercuts',
            fill: '#ffffff',
            stroke: '#535353',
            strokeThickness: 5
        });
        this._text.anchor.setTo(0.5, 0.4);
        this.addChild(this._text);
        this._text.angle = -this.angle;
    }

    updateProgress() {
        var progress = this._progress;
        progress = Phaser.Math.clamp(progress, 0.00001, 0.99999);

        this.bmp.clear();
        this.bmp.ctx.fillStyle = this.color;
        this.bmp.ctx.beginPath();
        this.bmp.ctx.arc(this._radius, this._radius, this._radius, 0, (Math.PI * 2) * progress, true);
        this.bmp.ctx.lineTo(this._radius, this._radius);
        this.bmp.ctx.closePath();
        this.bmp.ctx.fill();
        this.bmp.dirty = true;
    }

    getTextSprite() {
        return this._text;
    }
    setText(val) {
        this._text.setText(val);
    }



    getRadius() {
        return this._radius;
    }
    setRadius(val) {
        this._radius = (val > 0 ? val : 0);
        this.bmp.resize(this._radius * 2, this._radius * 2);
        this.updateProgress();
    }



    getProgress() {
        return this._progress;
    }
    setProgress(val) {
        this._progress = Phaser.Math.clamp(val, 0, 1);
        this.updateProgress();
    }
}
