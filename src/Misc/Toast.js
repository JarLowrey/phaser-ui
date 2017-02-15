/*
 * Toast
 */

export default class Toast extends Phaser.Group {

    constructor(game, textStr, btn, fontStyle = game.fonts.smallText, duration = textStr.length * 50, fadeDuration = 200) {
        super(game);

        this.fadeDuration = fadeDuration;
        this.margin = this.game.dimen.margin.sideOfScreen / 2;

        this.text = this.game.add.text(0, 0, textStr, fontStyle);
        this.text.anchor.setTo(0.5, 0.5);
        this.addChild(this.text);

        if (btn) {
            this.btn = btn;
            this.btn.height = this.text.height;
            this.btn.scale.x = this.btn.scale.y;
            this.btn.anchor.setTo(0.5, 0.5);
            this.btn.top = this.text.bottom;
            this.btn.x = this.text.x;
            this.addChild(this.btn);
        }

        this.bg = FactoryUi.getBgGraphic(this.game, this.width + this.margin, this.height + this.margin);
        this.bg.top = this.text.top - this.margin;
        this.bg.x = this.text.x;
        this.addChild(this.bg);
        this.sendToBack(this.bg);

        //size + position overall
        this.width = Math.min(this.bg.width, this.game.world.width);
        this.scale.y = this.scale.x;
        this.x = this.game.world.centerX;
        this.y = this.game.world.centerY;

        this.game.time.events.add(duration, this.startFade, this);
    }

    startFade() {
        if (!this.exists) return;

        this.game.add.tween(this).to({
            alpha: 0
        }, this.fadeDuration, Phaser.Easing.Linear.None, true);
    }

}
