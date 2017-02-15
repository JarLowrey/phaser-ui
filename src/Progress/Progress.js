/*
  Progress
  Parent to UI elements that visualize a range of data, eg a ProgressBar or ProgressPie
*/

export default class Progress extends Phaser.Group {

    get progress() {
        return this._progress;
    }
    set progress(val) {
        if (val > 100) {
            val = 100;
        }
        this._progress = val;

        //artifacts show up if you crop <=0. Thus hide it instead
        this.barSprite.visible = val > 0;
        if (val > 0) {
            this._applyFrontGraphicColor();

            //Create the cropping parameters: set the new, cropped image properties.
            const newWidth = (val / 100) * this.width;
            const x = (this.barShrinksTowardsLeft) ? 0 : this.width - newWidth;
            const cropRect = new Phaser.Rectangle(x, 0, newWidth, this.height);

            //perform the crop!
            this.frontGraphic.crop(cropRect);
        }
    }

    get frontGraphicColor() {
        return this._frontGraphicColor;
    }
    //either a hex value string, or a list of objects where each object has a (percentage) 'threshold' and a 'color'
    set frontGraphicColor(val) {
        this._frontGraphicColor = val;
        this._applyFrontGraphicColor();
    }

    constructor(game,
        width, height,
        //The background and foreground graphics must have diff sources as cropping the front modifies the underlying texture
        //This must be a function with params (width,height) that returns a graphic
        getBgGraphicSrc,
        getFrontGraphicSrc,
        innerGraphicOffset = 0,
        frontColor = [{
            'threshold': 25,
            'color': '0xff0000'
        }, {
            'threshold': 50,
            'color': '0xffff00'
        }, {
            'threshold': 100,
            'color': '0x00ff00'
        }],
        fontStyle = '', text = ''
    ) {
        super(game);

        //save useful vars
        this.frontGraphicFn = getFrontGraphicSrc;
        this.innerGraphicOffset = innerGraphicOffset;

        // create the sprites
        this.bgGraphic = getBgGraphicSrc(width, height);
        this.bgGraphic.anchor.setTo(0.5, 0.5);

        this.frontGraphic = getFrontGraphicSrc(width - innerGraphicOffset, height - innerGraphicOffset);
        this.frontGraphic.anchor.setTo(0.5, 0.5);

        this.text = this.game.add.text(0, 0, text, fontStyle);
        this.text.anchor.setTo(0.5, 0.5);

        this.addChild(this.bgGraphic);
        this.addChild(this.frontGraphic);
        this.addChild(this.text);

        //set sprite properties
        this.frontGraphicColor = frontColor;
        this.progress = 100;
    }

    /*
    makePressable(onPressedFunction, bgPressedColor, outlinePressedColor) {
        this.bgPressed = this.game.add.sprite(0, 0, this.getBarBitmapData(this.width - this.strokeLength, this.height - this.strokeLength));
        this.bgPressed.anchor.setTo(0.5, 0.5);
        this.addChildAt(this.bgPressed, 0);
        this.bgPressed.tint = bgPressedColor;

        this.outlinePressed = this.game.add.sprite(0, 0, this.getBarBitmapData(this.width, this.height));
        this.outlinePressed.anchor.setTo(0.5, 0.5);
        this.addChildAt(this.outlinePressed, 0);
        this.outlinePressed.tint = outlinePressedColor;

        //register click listeners
        this.setAll('inputEnabled', true);
        this.callAll('events.onInputDown.add', 'events.onInputDown', this.onDown, this);
        this.callAll('events.onInputUp.add', 'events.onInputUp', this.onUp, this);
        this.pressFunction = onPressedFunction;
    }
    onUp() {
        this.swapChildren(this.bgPressed, this.bgSprite);
        this.swapChildren(this.outlinePressed, this.outlineSprite);

        this.pressFunction();
    }
    onDown() {
        this.swapChildren(this.bgPressed, this.bgSprite);
        this.swapChildren(this.outlinePressed, this.outlineSprite);
    }
    setWidth(newWidth) {
        this.outlineSprite.width = newWidth;
        this.bgSprite.width = newWidth - this.strokeLength;
        this.barSprite.width = newWidth - this.strokeLength;

        this.barSprite.x = this.getBarXPosition(newWidth);
    }
    setHeight(newHeight) {
        this.outlineSprite.height = newHeight;
        this.bgSprite.height = newHeight;
        this.barSprite.height = newHeight;
        this.setTextSizeToBarSize();
    }

    getBarXAnchor() {
        return (this.barShrinksTowardsLeft) ? 0 : 1;
    }
    getBarXPosition(newWidth) {
        if (!newWidth) newWidth = this.width;
        return (this.barShrinksTowardsLeft) ? -newWidth / 2 + this.strokeLength / 2 : newWidth / 2 - this.strokeLength / 2;
    }

    static densityPixels(pixel) {
        return pixel * window.window.devicePixelRatio;
    }
    */

    setText(text = '', style = null) {
        this.text.setText(text);

        if (style) {
            this.text.setStyle(style);
        }
    }

    _applyFrontGraphicColor() {
        //allow Bar's color to change at different progressPercentageRemaining values
        if (typeof this._frontGraphicColor != 'string') {
            this._frontGraphicColor.sort(function(a, b) {
                return a.threshold - b.threshold;
            });

            //loop thru all the elements in the barColor array, starting at the smallest theshold. If _progress is under a threshold, set the color and exit the loop.
            for (var i = 0; i < this._frontGraphicColor.length; i++) {
                const barColorInstance = this._frontGraphicColor[i];
                if (this._progress <= barColorInstance.threshold) {
                    this.barSprite.tint = barColorInstance.color;
                    break;
                }
            }
        } else {
            this.frontGraphic.tint = this._frontGraphicColor;
        }
    }

}
