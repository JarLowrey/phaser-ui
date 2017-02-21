/*
  Progress
  Parent to UI elements that visualize a range of data, eg a ProgressBar or ProgressPie
*/
import Graphics from '../Misc/Graphics';

export default class Progress extends Phaser.Group {

    get progress() {
        return this._progress;
    }
    set progress(val) {
        if (val > Progress.MaxProgress) {
            val = Progress.MaxProgress;
        } else if (val < Progress.MinProgress) {
            val = Progress.MinProgress;
        }
        this._progress = val;

        this._applyCrop();
    }

    set reversed(val) {
        this._reversed = val;
        this._applyCrop();
    }
    get reversed() {
        return this._reversed;
    }

    get frontGraphicColor() {
        return this._frontGraphicColor;
    }
    //either a hex value string, or a list of objects where each object has a (percentage) 'threshold' and a 'color'
    set frontGraphicColor(val) {
        if (Array.isArray(val)) {
            val.sort(function(a, b) {
                return a.threshold - b.threshold;
            });
        }
        this._frontGraphicColor = val;

        this.frontGraphic.tint = this._getColor();
    }

    constructor(game,
        width, height,
        //The background and foreground graphics must have diff sources as cropping the front modifies the underlying texture
        //This must be a function with params (game,width,height) that returns a graphic
        texture,
        innerGraphicOffset = 0,
        text = '',
        frontColor = [{
            'threshold': .25,
            'color': '0xff0000'
        }, {
            'threshold': .5,
            'color': '0xffff00'
        }, {
            'threshold': 1,
            'color': '0x00ff00'
        }],
        fontStyle = ''
    ) {
        super(game);

        Progress.MaxProgress = 0.999999;
        Progress.MinProgress = 0.000001;

        //save useful vars
        this.innerGraphicOffset = innerGraphicOffset;

        // create the sprites
        this.bgBmd = Graphics.getBitmapData(this.game, texture, width, height);
        this.bgGraphic = this.game.add.sprite(0, 0, this.bgBmd);
        this.bgGraphic.anchor.setTo(0.5, 0.5);

        this.frontBmd = Graphics.getBitmapData(this.game, texture, width - innerGraphicOffset, height - innerGraphicOffset);
        this.frontGraphic = this.game.add.sprite(0, 0, this.frontBmd);
        this.frontGraphic.anchor.setTo(0.5, 0.5);

        this.text = this.game.add.text(0, 0);
        this.text.anchor.setTo(0.5, 0.5);
        this.setText(text, fontStyle);

        this.addChild(this.bgGraphic);
        this.addChild(this.frontGraphic);
        this.addChild(this.text);

        //set sprite properties
        this.frontGraphicColor = frontColor;
        this.progress = 1.0;
        this.reversed = false;
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
    */

    setText(text = '', style = null) {
        this.text.setText(text);

        if (style) {
            this.text.setStyle(style);
        }
        //ensure text does not fall off of graphic
        this.text.height = Math.min(this.text.height, this.bgGraphic.height);
        this.text.scale.x = this.text.scale.y;
        this.text.width = Math.min(this.text.height, this.bgGraphic.width);
        this.text.scale.y = this.text.scale.x;
    }

    _getColor() {
        let color = null;
        //allow Bar's color to change at different progressPercentageRemaining values
        if (Array.isArray(this._frontGraphicColor)) {
            //loop thru all the elements in the barColor array, starting at the smallest theshold. If _progress is under a threshold, set the color and exit the loop.
            for (var i = 0; i < this._frontGraphicColor.length; i++) {
                const barColorInstance = this._frontGraphicColor[i];
                if (this._progress <= barColorInstance.threshold) {
                    color = barColorInstance.color;
                    break;
                }
            }
        } else {
            color = this._frontGraphicColor;
        }
        return color;
    }

}
