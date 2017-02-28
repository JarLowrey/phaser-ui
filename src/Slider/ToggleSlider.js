/*
 * ToggleSlider
 *
 * Provides a pretty slider for displaying settings options
 */

export default class ToggleSlider extends Phaser.Group {

  constructor(game, onClickCallback = function() {}, isOn = false,
    onColor = 0x42f462, offColor = 0xffffff, tweenDuration = 400, easing = Phaser.Easing.Exponential.In) {
    super(game);

    //setup variables
    this.onColor = onColor;
    this.offColor = offColor;
    this.disabledColor = 0xcccccc;

    this.onClickCallback = onClickCallback;
    this.isOn = isOn;
    this.tweenDuration = tweenDuration;
    this.tweenEasing = easing;
    const width = 50;
    const radius = 25;
    const bgHeight = radius / 2;

    //setup children
    this._bg = this.game.add.graphics();
    this._bg.beginFill(0xffffff);
    this._bg.drawRoundedRect(-width / 4, 0, width, bgHeight, bgHeight / 2);
    this._bg.endFill();
    this._bg.x = -this._bg.width / 4;
    this._bg.inputEnabled = true;
    this._bg.alpha = 0.5;

    this._slidingCircle = this.game.add.graphics();
    this._slidingCircle.beginFill(0xffffff);
    this._slidingCircle.drawCircle(0, 0, radius);
    this._slidingCircle.endFill();
    this._slidingCircle.y = bgHeight / 2;
    this._slidingCircle.inputEnabled = true;

    //setup starting state
    this.setColor();
    if (this.isOn) {
      this._slidingCircle.right = this._bg.right;
    } else {
      this._slidingCircle.left = this._bg.left;
    }

    //setup tweens
    this._slideRight = this.game.add.tween(this._slidingCircle).to({
      right: this._bg.x + this._bg.width
    }, this.tweenDuration, this.tweenEasing);
    this._slideLeft = this.game.add.tween(this._slidingCircle).to({
      left: this._bg.x
    }, this.tweenDuration, this.tweenEasing);
    const reEnableInput = function() {
      this.inputEnableChildren = true;
      this._slidingCircle.inputEnabled = true;
      this._bg.inputEnabled = true;

      this.setColor();
    };
    this._slideRight.onComplete.add(reEnableInput, this);
    this._slideLeft.onComplete.add(reEnableInput, this);

    //add children
    this.addChild(this._bg);
    this.addChild(this._slidingCircle);

    //enable input actions
    this.inputEnableChildren = true;
    this.onChildInputDown.add(this.toggled, this);
  }

  setColor() {
    const color = (this.isOn) ? this.onColor : this.offColor;
    this._bg.tint = color;
    this._slidingCircle.tint = color;
  }

  toggled() {
    this.isOn = !this.isOn;
    this.onClickCallback(this.isOn);

    //disable toggle while slidding
    this.inputEnableChildren = false;
    this._slidingCircle.inputEnabled = false;
    this._bg.inputEnabled = false;

    this._bg.tint = this.disabledColor;
    this._slidingCircle.tint = this.disabledColor;

    if (!this.isOn) {
      this._slideLeft.start();
    } else {
      this._slideRight.start();
    }
  }

}
