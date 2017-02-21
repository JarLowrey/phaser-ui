(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["phaserUi"] = factory();
	else
		root["phaserUi"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
  Progress
  Parent to UI elements that visualize a range of data, eg a ProgressBar or ProgressPie
*/

class Progress extends Phaser.Group {

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
        //This must be a function with params (width,height) that returns a graphic
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
        this.bgBmd = this.getBitmapData(texture, width, height);
        this.bgGraphic = this.game.add.sprite(0, 0, this.bgBmd);
        this.bgGraphic.anchor.setTo(0.5, 0.5);

        this.frontBmd = this.getBitmapData(texture, width - innerGraphicOffset, height - innerGraphicOffset);
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

        this.text.addColor('#ffff00', 0);
    }

    getBitmapData(input, width, height) {
        let bmd = null;

        if (typeof input == 'function') {
            bmd = input.bind(this)(width, height);
        } else if (input instanceof Phaser.Image) {
            bmd = this.game.make.bitmapData(width, height);
            bmd.copy(input);
        }

        return bmd;
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
        this.text.height = Math.max(this.text.height, this.bgGraphic.height);
        this.text.width = Math.max(this.text.height, this.bgGraphic.width);
        //this.text.y = this.bgBmd.y;
        //this.text.x = this.bgBmd.x;
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Progress;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Toast
 */
class Toast extends Phaser.Group {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Toast;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Progress__ = __webpack_require__(0);


class ProgressBar extends __WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */] {

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
        this.frontGraphic.visible = this._progress != __WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */].MinProgress;

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
/* harmony export (immutable) */ __webpack_exports__["a"] = ProgressBar;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Progress__ = __webpack_require__(0);
/*
Original: http://jsfiddle.net/lewster32/0yvemxnw/
*/


class PieProgress extends __WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */] {
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
        this.frontGraphic.visible = this._progress != __WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */].MaxProgress;
        if (this.frontGraphic.visible) {

            let radius = this.frontGraphic.height / 2;
            let color = this._getColor();
            //let color = Phaser.Color.valueToColor(this._getColor());
            //color = 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
            let new_angle = (this.reversed) ? (Math.PI * 2) * (1 - this.progress) : (Math.PI * 2) * this.progress;

            this.frontBmd.clear();
            this.frontBmd.ctx.fillStyle = color;
            this.frontBmd.ctx.beginPath();
            this.frontBmd.ctx.arc(radius, radius, radius, 0, new_angle, true);
            this.frontBmd.ctx.lineTo(radius, radius);
            this.frontBmd.ctx.closePath();
            this.frontBmd.ctx.fill();

            this.frontBmd.update();
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = PieProgress;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * ToggleSlider
 *
 * Provides a pretty slider for displaying settings options
 */
 
class ToggleSlider extends Phaser.Group {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = ToggleSlider;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Progress_Progress_js__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return __WEBPACK_IMPORTED_MODULE_0__Progress_Progress_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Progress_ProgressPie_js__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressPie", function() { return __WEBPACK_IMPORTED_MODULE_1__Progress_ProgressPie_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Progress_ProgressBar_js__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return __WEBPACK_IMPORTED_MODULE_2__Progress_ProgressBar_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Slider_ToggleSlider_js__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSlider", function() { return __WEBPACK_IMPORTED_MODULE_3__Slider_ToggleSlider_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Misc_Toast_js__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return __WEBPACK_IMPORTED_MODULE_4__Misc_Toast_js__["a"]; });
//bundle all the individual files together for export










/***/ })
/******/ ]);
});