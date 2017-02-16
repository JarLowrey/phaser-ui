/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Progress;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Star
 * ====
 *
 * Individual star paritcles in the background star emitters
 */

class Star extends Phaser.Particle {

    constructor(game, x, y) {
        super(game, x, y, Star.getTexture(game));

        this.checkWorldBounds = true;
        this.events.onOutOfBounds.add(this.__resetPos, this);
    }

    __resetPos() {
        this.x = this.game.world.width * Math.random();
        this.y = 0;
    }

    static getTexture(game) {
        const radius = 12;

        var bmd = game.add.bitmapData(128, 128);
        bmd.circle(radius, radius, radius, 'rgb(255,255,255)');
        return bmd;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Star;



/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Progress__ = __webpack_require__(0);


class ProgressBar extends __WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */] {

    constructor(game,
        width, height,
        //The background and foreground graphics must have diff sources as cropping the front modifies the underlying texture
        //This must be a function with params (width,height) that returns a graphic
        getBgGraphicSrc,
        getFrontGraphicSrc,
        innerGraphicOffset,
        frontColor,
        fontStyle, text
    ) {
        super(game, width, height, getBgGraphicSrc, getFrontGraphicSrc, innerGraphicOffset, frontColor, fontStyle, text);
    }

    /*
      Edit this function to change the appearance of the bars. Peruse the bitmap data API for reference
      http://phaser.io/docs/2.6.1/Phaser.BitmapData.html
    */
    getBarBitmapData(width, height) {
        const radius = height / 2;
        var bmd = this.game.add.bitmapData(width, height);

        bmd.circle(radius, radius, radius, '#ffffff');
        bmd.circle(width - radius, radius, radius, '#ffffff');

        bmd.ctx.fillStyle = '#ffffff'; //bar must have pure white bitmap data in order to be tinted effectively
        bmd.ctx.beginPath();
        bmd.ctx.rect(radius, 0, width - radius * 2, height);
        bmd.ctx.fill();

        return bmd;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProgressBar;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Original: http://jsfiddle.net/lewster32/0yvemxnw/
*/
//import Progress from './Progress'

class PieProgress extends Phaser.Group {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = PieProgress;



/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Star__ = __webpack_require__(1);
/* jshint esversion: 6 */

/*
 * Stars
 * ====
 * Parallax scrolling star field
 * https://gamedevelopment.tutsplus.com/tutorials/parallax-scrolling-a-simple-effective-way-to-add-depth-to-a-2d-game--cms-21510
 * TODO: star particles have infinite life, choose a random position when falling offscreen, iron out kinks in the vals used for para
 */


class Stars {

    constructor(game) {
        this.game = game;

        this.maxNumParticles = 75;
        //this.lifespan = 10000;
        this.emitFreq = 150;
        this.numEmitPer = 2;

        this.baseMinStarSpeed = 10;
        this.baseMaxStarSpeed = 20;

        this.setupStars();
    }

    //private function to create and setup particle properties
    setupStars() {
        //	Emitters have a center point and a width/height, which extends from their center point to the left/right and up/down
        this.layerOneStars = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY, this.maxNumParticles);
        this.layerTwoStars = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY, this.maxNumParticles);
        this.layerThreeStars = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY, this.maxNumParticles);

        this.__setupEmitter(this.layerOneStars, 1);
        this.__setupEmitter(this.layerTwoStars, 2);
        this.__setupEmitter(this.layerThreeStars, 3);
    }

    /**
    relativeDistToPlayer = smaller when stars need to be closer to player (bigger, faster)
    */
    __setupEmitter(emitter, relativeDistToPlayer) {
        emitter.particleClass = __WEBPACK_IMPORTED_MODULE_0__Star__["a" /* default */];
        emitter.makeParticles();

        emitter.x = this.game.world.centerX;
        emitter.y = this.game.world.centerY;

        emitter.width = this.game.world.width;
        emitter.height = this.game.world.height;

        emitter.gravity.set(0, 0);
        emitter.setRotation(0, 0);

        emitter.minParticleSpeed.set(0, this.baseMinStarSpeed - this.baseMinStarSpeed / relativeDistToPlayer);
        emitter.maxParticleSpeed.set(0, 5 * this.baseMaxStarSpeed - this.baseMaxStarSpeed / relativeDistToPlayer);

        emitter.setAlpha(0.75 - relativeDistToPlayer / 10, 1 - relativeDistToPlayer / 10);

        emitter.minParticleScale = .1 - relativeDistToPlayer / 100;
        emitter.maxParticleScale = .5 - relativeDistToPlayer / 100;

        emitter.setAlpha(0.75, 1);
    }


    //expose showStars on a global level so other states can take advantage of it
    showStars() {
        /*
        const explodeLife = this.lifespan / 2, explodeNumStars = this.maxNumParticles / 2;
        //set some stars onto the screen all at once to populate it a bit before flow can get established
        this.layerOneStars.start(true, explodeLife, null, explodeNumStars);
        this.layerOneStars.flow(this.lifespan, this.emitFreq, this.numEmitPer, -1, true); //flow(lifespan, frequency, quantity, total, immediate)

        this.layerTwoStars.start(true, explodeLife, null, explodeNumStars);
        this.layerTwoStars.flow(this.lifespan, this.emitFreq, this.numEmitPer, -1, true);

        this.layerThreeStars.start(true, explodeLife, null, explodeNumStars);
        this.layerThreeStars.flow(this.lifespan, this.emitFreq, this.numEmitPer, -1, true);
        */

        this.layerOneStars.explode(0, this.maxNumParticles);
        this.layerTwoStars.explode(0, this.maxNumParticles);
        this.layerThreeStars.explode(0, this.maxNumParticles);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Stars;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__particles_Star_js__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Star", function() { return __WEBPACK_IMPORTED_MODULE_0__particles_Star_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particles_Stars_js__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Stars", function() { return __WEBPACK_IMPORTED_MODULE_1__particles_Stars_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Progress_Progress_js__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return __WEBPACK_IMPORTED_MODULE_2__Progress_Progress_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Progress_ProgressPie_js__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressPie", function() { return __WEBPACK_IMPORTED_MODULE_3__Progress_ProgressPie_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Progress_ProgressBar_js__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return __WEBPACK_IMPORTED_MODULE_4__Progress_ProgressBar_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Slider_ToggleSlider_js__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSlider", function() { return __WEBPACK_IMPORTED_MODULE_5__Slider_ToggleSlider_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Misc_Toast_js__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return __WEBPACK_IMPORTED_MODULE_6__Misc_Toast_js__["a"]; });












/***/ })
/******/ ]);