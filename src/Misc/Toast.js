/*
 * Toast
 */
import Graphics from './Graphics';

export default class Toast extends Phaser.Group {

    constructor(game) {
        super(game);

        this.margin = 10;

        this.hideTimer = this.game.time.create(false);

        this._text = this.game.add.text(0, 0);
        this._text.anchor.setTo(0.5, 0.5);
        this.addChild(this._text);

        this.bg = this.game.add.sprite(0, 0);
        this.bg.anchor.setTo(0.5, 0.5);
        this.bg.y = this._text.y;
        this.bg.x = this._text.x;
        this.addChild(this.bg);
        this.sendToBack(this.bg);

        this.x = this.game.world.centerX;
        this.bottom = this.game.world.height - this.margin;
        this.alpha = 1;
    }

    setBackground(backgroundSrc) {
        let width = this._text.width + this.margin;
        let height = this._text.height + this.margin;

        if (backgroundSrc) {
            backgroundSrc = Graphics.getBitmapData(this.game, backgroundSrc, width, height);
        } else {
            backgroundSrc = Graphics.roundedRectBmd(this.game, width, height);
        }

        this.bg.loadTexture(backgroundSrc);
    }

    getText() {
        return this._text.text;
    }

    show(textStr, fontStyle, bgGraphicSrc, delayShown = textStr.length * 50, fadeDuration = 200) {
        //change up the displayed info & UI
        this._text.setText(textStr);
        if (fontStyle) {
            this._text.setStyle(fontStyle);
        }
        this.setBackground(bgGraphicSrc);
        this.alpha = 1;
        this.visible = true;

        //if already running a previous timer, kill it and hide the previous Toast quickly
        this.hideTimer.stop();

        //set the Toast to be hidden after a delay
        this.hideTimer.add(delayShown, this._fade, this, fadeDuration);
        this.hideTimer.start();
    }

    _fade(fadeDuration) {
        if (!this.exists) return;

        this.game.add.tween(this).to({
            alpha: 0
        }, fadeDuration, Phaser.Easing.Linear.None, true);
    }

}
