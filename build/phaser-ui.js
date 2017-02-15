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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Progress
  Parent to UI elements that visualize a range of data, eg a ProgressBar or ProgressPie
*/

var Progress = function (_Phaser$Group) {
    _inherits(Progress, _Phaser$Group);

    _createClass(Progress, [{
        key: 'progress',
        get: function get() {
            return this._progress;
        },
        set: function set(val) {
            if (val > 100) {
                val = 100;
            }
            this._progress = val;

            //artifacts show up if you crop <=0. Thus hide it instead
            this.barSprite.visible = val > 0;
            if (val > 0) {
                this._applyFrontGraphicColor();

                //Create the cropping parameters: set the new, cropped image properties.
                var newWidth = val / 100 * this.width;
                var x = this.barShrinksTowardsLeft ? 0 : this.width - newWidth;
                var cropRect = new Phaser.Rectangle(x, 0, newWidth, this.height);

                //perform the crop!
                this.frontGraphic.crop(cropRect);
            }
        }
    }, {
        key: 'frontGraphicColor',
        get: function get() {
            return this._frontGraphicColor;
        }
        //either a hex value string, or a list of objects where each object has a (percentage) 'threshold' and a 'color'
        ,
        set: function set(val) {
            this._frontGraphicColor = val;
            this._applyFrontGraphicColor();
        }
    }]);

    function Progress(game, width, height,
    //The background and foreground graphics must have diff sources as cropping the front modifies the underlying texture
    //This must be a function with params (width,height) that returns a graphic
    getBgGraphicSrc, getFrontGraphicSrc) {
        var innerGraphicOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var frontColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [{
            'threshold': 25,
            'color': '0xff0000'
        }, {
            'threshold': 50,
            'color': '0xffff00'
        }, {
            'threshold': 100,
            'color': '0x00ff00'
        }];
        var fontStyle = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
        var text = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';

        _classCallCheck(this, Progress);

        //save useful vars
        var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, game));

        _this.frontGraphicFn = getFrontGraphicSrc;
        _this.innerGraphicOffset = innerGraphicOffset;

        // create the sprites
        _this.bgGraphic = getBgGraphicSrc(width, height);
        _this.bgGraphic.anchor.setTo(0.5, 0.5);

        _this.frontGraphic = getFrontGraphicSrc(width - innerGraphicOffset, height - innerGraphicOffset);
        _this.frontGraphic.anchor.setTo(0.5, 0.5);

        _this.text = _this.game.add.text(0, 0, text, fontStyle);
        _this.text.anchor.setTo(0.5, 0.5);

        _this.addChild(_this.bgGraphic);
        _this.addChild(_this.frontGraphic);
        _this.addChild(_this.text);

        //set sprite properties
        _this.frontGraphicColor = frontColor;
        _this.progress = 100;
        return _this;
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

    _createClass(Progress, [{
        key: 'setText',
        value: function setText() {
            var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            this.text.setText(text);

            if (style) {
                this.text.setStyle(style);
            }
        }
    }, {
        key: '_applyFrontGraphicColor',
        value: function _applyFrontGraphicColor() {
            //allow Bar's color to change at different progressPercentageRemaining values
            if (typeof this._frontGraphicColor != 'string') {
                this._frontGraphicColor.sort(function (a, b) {
                    return a.threshold - b.threshold;
                });

                //loop thru all the elements in the barColor array, starting at the smallest theshold. If _progress is under a threshold, set the color and exit the loop.
                for (var i = 0; i < this._frontGraphicColor.length; i++) {
                    var barColorInstance = this._frontGraphicColor[i];
                    if (this._progress <= barColorInstance.threshold) {
                        this.barSprite.tint = barColorInstance.color;
                        break;
                    }
                }
            } else {
                this.frontGraphic.tint = this._frontGraphicColor;
            }
        }
    }]);

    return Progress;
}(Phaser.Group);

exports.default = Progress;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Star
 * ====
 *
 * Individual star paritcles in the background star emitters
 */

var Star = function (_Phaser$Particle) {
    _inherits(Star, _Phaser$Particle);

    function Star(game, x, y) {
        _classCallCheck(this, Star);

        var _this = _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this, game, x, y, Star.getTexture(game)));

        _this.checkWorldBounds = true;
        _this.events.onOutOfBounds.add(_this.__resetPos, _this);
        return _this;
    }

    _createClass(Star, [{
        key: '__resetPos',
        value: function __resetPos() {
            this.x = this.game.world.width * Math.random();
            this.y = 0;
        }
    }], [{
        key: 'getTexture',
        value: function getTexture(game) {
            var radius = 12;

            var bmd = game.add.bitmapData(128, 128);
            bmd.circle(radius, radius, radius, 'rgb(255,255,255)');
            return bmd;
        }
    }]);

    return Star;
}(Phaser.Particle);

exports.default = Star;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Toast
 */

var Toast = function (_Phaser$Group) {
    _inherits(Toast, _Phaser$Group);

    function Toast(game, textStr, btn) {
        var fontStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : game.fonts.smallText;
        var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : textStr.length * 50;
        var fadeDuration = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 200;

        _classCallCheck(this, Toast);

        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, game));

        _this.fadeDuration = fadeDuration;
        _this.margin = _this.game.dimen.margin.sideOfScreen / 2;

        _this.text = _this.game.add.text(0, 0, textStr, fontStyle);
        _this.text.anchor.setTo(0.5, 0.5);
        _this.addChild(_this.text);

        if (btn) {
            _this.btn = btn;
            _this.btn.height = _this.text.height;
            _this.btn.scale.x = _this.btn.scale.y;
            _this.btn.anchor.setTo(0.5, 0.5);
            _this.btn.top = _this.text.bottom;
            _this.btn.x = _this.text.x;
            _this.addChild(_this.btn);
        }

        _this.bg = FactoryUi.getBgGraphic(_this.game, _this.width + _this.margin, _this.height + _this.margin);
        _this.bg.top = _this.text.top - _this.margin;
        _this.bg.x = _this.text.x;
        _this.addChild(_this.bg);
        _this.sendToBack(_this.bg);

        //size + position overall
        _this.width = Math.min(_this.bg.width, _this.game.world.width);
        _this.scale.y = _this.scale.x;
        _this.x = _this.game.world.centerX;
        _this.y = _this.game.world.centerY;

        _this.game.time.events.add(duration, _this.startFade, _this);
        return _this;
    }

    _createClass(Toast, [{
        key: "startFade",
        value: function startFade() {
            if (!this.exists) return;

            this.game.add.tween(this).to({
                alpha: 0
            }, this.fadeDuration, Phaser.Easing.Linear.None, true);
        }
    }]);

    return Toast;
}(Phaser.Group);

exports.default = Toast;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Progress2 = __webpack_require__(0);

var _Progress3 = _interopRequireDefault(_Progress2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint esversion: 6 */

var ProgressBar = function (_Progress) {
    _inherits(ProgressBar, _Progress);

    function ProgressBar(game, width, height,
    //The background and foreground graphics must have diff sources as cropping the front modifies the underlying texture
    //This must be a function with params (width,height) that returns a graphic
    getBgGraphicSrc, getFrontGraphicSrc, innerGraphicOffset, frontColor, fontStyle, text) {
        _classCallCheck(this, ProgressBar);

        return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, game, width, height, getBgGraphicSrc, getFrontGraphicSrc, innerGraphicOffset, frontColor, fontStyle, text));
    }

    /*
      Edit this function to change the appearance of the bars. Peruse the bitmap data API for reference
      http://phaser.io/docs/2.6.1/Phaser.BitmapData.html
    */


    _createClass(ProgressBar, [{
        key: 'getBarBitmapData',
        value: function getBarBitmapData(width, height) {
            var radius = height / 2;
            var bmd = this.game.add.bitmapData(width, height);

            bmd.circle(radius, radius, radius, '#ffffff');
            bmd.circle(width - radius, radius, radius, '#ffffff');

            bmd.ctx.fillStyle = '#ffffff'; //bar must have pure white bitmap data in order to be tinted effectively
            bmd.ctx.beginPath();
            bmd.ctx.rect(radius, 0, width - radius * 2, height);
            bmd.ctx.fill();

            return bmd;
        }
    }]);

    return ProgressBar;
}(_Progress3.default);

exports.default = ProgressBar;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Original: http://jsfiddle.net/lewster32/0yvemxnw/
*/
//import Progress from './Progress'

var PieProgress = function (_Phaser$Group) {
    _inherits(PieProgress, _Phaser$Group);

    function PieProgress(game, x, y, radius, color, angle, text) {
        _classCallCheck(this, PieProgress);

        var _this = _possibleConstructorReturn(this, (PieProgress.__proto__ || Object.getPrototypeOf(PieProgress)).call(this, game, x, y));

        _this._radius = radius;
        _this._progress = 1;
        _this.bmp = _this.game.add.bitmapData(radius * 2, radius * 2);
        _this.loadTexture(_this.bmp);

        _this.anchor.setTo(0.5, 0.5);
        _this.angle = angle || -90;
        _this.color = color || '#fff';
        _this.updateProgress();

        _this._text = _this.game.add.text(0, 0, text, {
            font: '26px papercuts',
            fill: '#ffffff',
            stroke: '#535353',
            strokeThickness: 5
        });
        _this._text.anchor.setTo(0.5, 0.4);
        _this.addChild(_this._text);
        _this._text.angle = -_this.angle;
        return _this;
    }

    _createClass(PieProgress, [{
        key: 'updateProgress',
        value: function updateProgress() {
            var progress = this._progress;
            progress = Phaser.Math.clamp(progress, 0.00001, 0.99999);

            this.bmp.clear();
            this.bmp.ctx.fillStyle = this.color;
            this.bmp.ctx.beginPath();
            this.bmp.ctx.arc(this._radius, this._radius, this._radius, 0, Math.PI * 2 * progress, true);
            this.bmp.ctx.lineTo(this._radius, this._radius);
            this.bmp.ctx.closePath();
            this.bmp.ctx.fill();
            this.bmp.dirty = true;
        }
    }, {
        key: 'getTextSprite',
        value: function getTextSprite() {
            return this._text;
        }
    }, {
        key: 'setText',
        value: function setText(val) {
            this._text.setText(val);
        }
    }, {
        key: 'getRadius',
        value: function getRadius() {
            return this._radius;
        }
    }, {
        key: 'setRadius',
        value: function setRadius(val) {
            this._radius = val > 0 ? val : 0;
            this.bmp.resize(this._radius * 2, this._radius * 2);
            this.updateProgress();
        }
    }, {
        key: 'getProgress',
        value: function getProgress() {
            return this._progress;
        }
    }, {
        key: 'setProgress',
        value: function setProgress(val) {
            this._progress = Phaser.Math.clamp(val, 0, 1);
            this.updateProgress();
        }
    }]);

    return PieProgress;
}(Phaser.Group);

exports.default = PieProgress;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * ToggleSlider
 *
 * Provides a pretty slider for displaying settings options
 */

var ToggleSlider = function (_Phaser$Group) {
    _inherits(ToggleSlider, _Phaser$Group);

    function ToggleSlider(game) {
        var onClickCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var isOn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var onColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x42f462;
        var offColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0xffffff;
        var tweenDuration = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 400;
        var easing = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Phaser.Easing.Exponential.In;

        _classCallCheck(this, ToggleSlider);

        //setup variables
        var _this = _possibleConstructorReturn(this, (ToggleSlider.__proto__ || Object.getPrototypeOf(ToggleSlider)).call(this, game));

        _this.onColor = onColor;
        _this.offColor = offColor;
        _this.disabledColor = 0xcccccc;

        _this.onClickCallback = onClickCallback;
        _this.isOn = isOn;
        _this.tweenDuration = tweenDuration;
        _this.tweenEasing = easing;
        var width = 50;
        var radius = 25;
        var bgHeight = radius / 2;

        //setup children
        _this._bg = _this.game.add.graphics();
        _this._bg.beginFill(0xffffff);
        _this._bg.drawRoundedRect(-width / 4, 0, width, bgHeight, bgHeight / 2);
        _this._bg.endFill();
        _this._bg.x = -_this._bg.width / 4;
        _this._bg.inputEnabled = true;
        _this._bg.alpha = 0.5;

        _this._slidingCircle = _this.game.add.graphics();
        _this._slidingCircle.beginFill(0xffffff);
        _this._slidingCircle.drawCircle(0, 0, radius);
        _this._slidingCircle.endFill();
        _this._slidingCircle.y = bgHeight / 2;
        _this._slidingCircle.inputEnabled = true;

        //setup starting state
        _this.setColor();
        if (_this.isOn) {
            _this._slidingCircle.right = _this._bg.right;
        } else {
            _this._slidingCircle.left = _this._bg.left;
        }

        //setup tweens
        _this._slideRight = _this.game.add.tween(_this._slidingCircle).to({
            right: _this._bg.x + _this._bg.width
        }, _this.tweenDuration, _this.tweenEasing);
        _this._slideLeft = _this.game.add.tween(_this._slidingCircle).to({
            left: _this._bg.x
        }, _this.tweenDuration, _this.tweenEasing);
        var reEnableInput = function reEnableInput() {
            this.inputEnableChildren = true;
            this._slidingCircle.inputEnabled = true;
            this._bg.inputEnabled = true;

            this.setColor();
        };
        _this._slideRight.onComplete.add(reEnableInput, _this);
        _this._slideLeft.onComplete.add(reEnableInput, _this);

        //add children
        _this.addChild(_this._bg);
        _this.addChild(_this._slidingCircle);

        //enable input actions
        _this.inputEnableChildren = true;
        _this.onChildInputDown.add(_this.toggled, _this);
        return _this;
    }

    _createClass(ToggleSlider, [{
        key: "setColor",
        value: function setColor() {
            var color = this.isOn ? this.onColor : this.offColor;
            this._bg.tint = color;
            this._slidingCircle.tint = color;
        }
    }, {
        key: "toggled",
        value: function toggled() {
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
    }]);

    return ToggleSlider;
}(Phaser.Group);

exports.default = ToggleSlider;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6 */

/*
 * Stars
 * ====
 * Parallax scrolling star field
 * https://gamedevelopment.tutsplus.com/tutorials/parallax-scrolling-a-simple-effective-way-to-add-depth-to-a-2d-game--cms-21510
 * TODO: star particles have infinite life, choose a random position when falling offscreen, iron out kinks in the vals used for para
 */

var _Star = __webpack_require__(1);

var _Star2 = _interopRequireDefault(_Star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stars = function () {
    function Stars(game) {
        _classCallCheck(this, Stars);

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


    _createClass(Stars, [{
        key: 'setupStars',
        value: function setupStars() {
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

    }, {
        key: '__setupEmitter',
        value: function __setupEmitter(emitter, relativeDistToPlayer) {
            emitter.particleClass = _Star2.default;
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

    }, {
        key: 'showStars',
        value: function showStars() {
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
    }]);

    return Stars;
}();

exports.default = Stars;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Star = __webpack_require__(1);

Object.defineProperty(exports, 'Star', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_Star).default;
    }
});

var _Stars = __webpack_require__(6);

Object.defineProperty(exports, 'Stars', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_Stars).default;
    }
});

var _Progress = __webpack_require__(0);

Object.defineProperty(exports, 'Progress', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_Progress).default;
    }
});

var _ProgressPie = __webpack_require__(4);

Object.defineProperty(exports, 'ProgressPie', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_ProgressPie).default;
    }
});

var _ProgressBar = __webpack_require__(3);

Object.defineProperty(exports, 'ProgressBar', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_ProgressBar).default;
    }
});

var _ToggleSlider = __webpack_require__(5);

Object.defineProperty(exports, 'ToggleSlider', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_ToggleSlider).default;
    }
});

var _Toast = __webpack_require__(2);

Object.defineProperty(exports, 'Toast', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_Toast).default;
    }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);