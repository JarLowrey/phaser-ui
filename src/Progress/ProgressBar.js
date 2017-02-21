import Progress from './Progress';

export default class ProgressBar extends Progress {

    constructor(game,
        width, height,
        //The background and foreground graphics must have diff sources as cropping the front modifies the underlying texture
        //This must be a function with params (width,height) that returns a graphic
        texture,
        innerGraphicOffset,
        frontColor,
        fontStyle, text
    ) {
        super(game, width, height, texture, innerGraphicOffset, frontColor, fontStyle, text);
    }

    _applyCrop() {
        //artifacts show up if you crop <=0. Thus hide it instead
        this.frontGraphic.visible = this._progress != Progress.MinProgress;

        if (this.frontGraphic.visible) {
            this.frontGraphic.tint = this._getColor();

            //Create the cropping parameters: set the new, cropped image properties.
            const newWidth = this._progress * this.width;
            const x = (this.reversed) ? this.width - newWidth : 0;
            const cropRect = new Phaser.Rectangle(x, 0, newWidth, this.height);

            //perform the crop!
            this.frontGraphic.crop(cropRect);

            //position the newly cropped object
            if (this.reversed) {
                this.frontGraphic.right = this.bgGraphic.right - this.innerGraphicOffset;
            } else {
                this.frontGraphic.left = this.bgGraphic.left + this.innerGraphicOffset;
            }
        }
    }
}
