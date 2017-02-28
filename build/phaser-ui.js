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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/*
 * Graphics
 * Contains some pretty pre-defined graphics objects
 */
var Graphics = function () {
  function Graphics() {
    _classCallCheck(this, Graphics);
  }

  _createClass(Graphics, null, [{
    key: 'roundedRectBmd',
    value: function roundedRectBmd(game, width, height) {
      var radius = height / 2;
      var bmd = game.add.bitmapData(width, height);

      bmd.circle(radius, radius, radius, '#ffffff');
      bmd.circle(width - radius, radius, radius, '#ffffff');

      bmd.ctx.fillStyle = '#ffffff'; //bar must have pure white bitmap data in order to be tinted effectively
      bmd.ctx.beginPath();
      bmd.ctx.rect(radius, 0, width - radius * 2, height);
      bmd.ctx.fill();

      return bmd;
    }
  }, {
    key: 'getBitmapData',
    value: function getBitmapData(game, input, width, height) {
      var bmd = null;

      if (typeof input == 'function') {
        bmd = input(game, width, height);
      } else if (input instanceof Phaser.Image) {
        bmd = game.make.bitmapData(width, height);
        bmd.copy(input);
      }

      return bmd;
    }
  }]);

  return Graphics;
}();

exports.default = Graphics;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Graphics = __webpack_require__(0);

var _Graphics2 = _interopRequireDefault(_Graphics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
      if (val > Progress.MaxProgress) {
        val = Progress.MaxProgress;
      } else if (val < Progress.MinProgress) {
        val = Progress.MinProgress;
      }
      this._progress = val;

      this._applyCrop();
    }
  }, {
    key: 'reversed',
    set: function set(val) {
      this._reversed = val;
      this._applyCrop();
    },
    get: function get() {
      return this._reversed;
    }
  }, {
    key: 'frontGraphicColor',
    get: function get() {
      return this._frontGraphicColor;
    }
    //either a hex value string, or a list of objects where each object has a (percentage) 'threshold' and a 'color'
    ,
    set: function set(val) {
      if (Array.isArray(val)) {
        val.sort(function (a, b) {
          return a.threshold - b.threshold;
        });
      }
      this._frontGraphicColor = val;

      this.frontGraphic.tint = this._getColor();
    }
  }]);

  function Progress(game, width, height,
  //The background and foreground graphics must have diff sources as cropping the front modifies the underlying texture
  //This must be a function with params (game,width,height) that returns a graphic
  texture) {
    var innerGraphicOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
    var frontColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [{
      'threshold': .25,
      'color': '0xff0000'
    }, {
      'threshold': .5,
      'color': '0xffff00'
    }, {
      'threshold': 1,
      'color': '0x00ff00'
    }];
    var fontStyle = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';

    _classCallCheck(this, Progress);

    var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, game));

    Progress.MaxProgress = 0.999999;
    Progress.MinProgress = 0.000001;

    //save useful vars
    _this.innerGraphicOffset = innerGraphicOffset;

    // create the sprites
    _this.bgBmd = _Graphics2.default.getBitmapData(_this.game, texture, width, height);
    _this.bgGraphic = _this.game.add.sprite(0, 0, _this.bgBmd);
    _this.bgGraphic.anchor.setTo(0.5, 0.5);

    _this.frontBmd = _Graphics2.default.getBitmapData(_this.game, texture, width - innerGraphicOffset, height - innerGraphicOffset);
    _this.frontGraphic = _this.game.add.sprite(0, 0, _this.frontBmd);
    _this.frontGraphic.anchor.setTo(0.5, 0.5);

    _this.text = _this.game.add.text(0, 0);
    _this.text.anchor.setTo(0.5, 0.5);
    _this.setText(text, fontStyle);

    _this.addChild(_this.bgGraphic);
    _this.addChild(_this.frontGraphic);
    _this.addChild(_this.text);

    //set sprite properties
    _this.frontGraphicColor = frontColor;
    _this.progress = 0;
    _this.reversed = false;
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
      //ensure text does not fall off of graphic
      this.text.height = Math.min(this.text.height, this.bgGraphic.height);
      this.text.scale.x = this.text.scale.y;
      this.text.width = Math.min(this.text.height, this.bgGraphic.width);
      this.text.scale.y = this.text.scale.x;
    }
  }, {
    key: '_getColor',
    value: function _getColor() {
      var color = null;
      //allow Bar's color to change at different progressPercentageRemaining values
      if (Array.isArray(this._frontGraphicColor)) {
        //loop thru all the elements in the barColor array, starting at the smallest theshold. If _progress is under a threshold, set the color and exit the loop.
        for (var i = 0; i < this._frontGraphicColor.length; i++) {
          var barColorInstance = this._frontGraphicColor[i];
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
  }]);

  return Progress;
}(Phaser.Group);

exports.default = Progress;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Graphics = __webpack_require__(0);

var _Graphics2 = _interopRequireDefault(_Graphics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Toast
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Toast = function (_Phaser$Group) {
  _inherits(Toast, _Phaser$Group);

  function Toast(game) {
    _classCallCheck(this, Toast);

    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, game));

    _this.margin = 10;

    _this.hideTimer = _this.game.time.create(false);

    _this._text = _this.game.add.text(0, 0);
    _this._text.anchor.setTo(0.5, 0.5);
    _this.addChild(_this._text);

    _this.bg = _this.game.add.sprite(0, 0);
    _this.bg.anchor.setTo(0.5, 0.5);
    _this.bg.y = _this._text.y;
    _this.bg.x = _this._text.x;
    _this.addChild(_this.bg);
    _this.sendToBack(_this.bg);

    _this.x = _this.game.world.centerX;
    _this.bottom = _this.game.world.height - _this.margin;
    _this.alpha = 1;
    return _this;
  }

  _createClass(Toast, [{
    key: 'setBackground',
    value: function setBackground(backgroundSrc) {
      var width = this._text.width + this.margin;
      var height = this._text.height + this.margin;

      if (backgroundSrc) {
        backgroundSrc = _Graphics2.default.getBitmapData(this.game, backgroundSrc, width, height);
      } else {
        backgroundSrc = _Graphics2.default.roundedRectBmd(this.game, width, height);
      }

      this.bg.loadTexture(backgroundSrc);
    }
  }, {
    key: 'getText',
    value: function getText() {
      return this._text.text;
    }
  }, {
    key: 'show',
    value: function show(textStr, fontStyle, bgGraphicSrc) {
      var delayShown = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : textStr.length * 50;
      var fadeDuration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 200;

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
  }, {
    key: '_fade',
    value: function _fade(fadeDuration) {
      if (!this.exists) return;

      this.game.add.tween(this).to({
        alpha: 0
      }, fadeDuration, Phaser.Easing.Linear.None, true);
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

var _Progress2 = __webpack_require__(1);

var _Progress3 = _interopRequireDefault(_Progress2);

var _Graphics = __webpack_require__(0);

var _Graphics2 = _interopRequireDefault(_Graphics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_Progress) {
  _inherits(ProgressBar, _Progress);

  function ProgressBar(game, width, height, texture, innerGraphicOffset, frontColor, fontStyle, text) {
    _classCallCheck(this, ProgressBar);

    console.log(texture);
    if (!texture) {
      texture = _Graphics2.default.roundedRectBmd;
    }
    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, game, width, height, texture, innerGraphicOffset, frontColor, fontStyle, text));
  }

  _createClass(ProgressBar, [{
    key: '_applyCrop',
    value: function _applyCrop() {
      //artifacts show up if you crop <=0. Thus hide it instead
      this.frontGraphic.visible = this._progress != _Progress3.default.MinProgress;

      if (this.frontGraphic.visible) {
        this.frontGraphic.tint = this._getColor();

        //Create the cropping parameters: set the new, cropped image properties.
        var newWidth = this._progress * this.width;
        var x = this.reversed ? this.width - newWidth : 0;
        var cropRect = new Phaser.Rectangle(x, 0, newWidth, this.height);

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

var _Progress2 = __webpack_require__(1);

var _Progress3 = _interopRequireDefault(_Progress2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Original: http://jsfiddle.net/lewster32/0yvemxnw/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var PieProgress = function (_Progress) {
  _inherits(PieProgress, _Progress);

  function PieProgress(game, radius, texture, innerGraphicOffset, text, frontColor, fontStyle) {
    _classCallCheck(this, PieProgress);

    var _this = _possibleConstructorReturn(this, (PieProgress.__proto__ || Object.getPrototypeOf(PieProgress)).call(this, game, radius, radius, texture, innerGraphicOffset, text, frontColor, fontStyle));

    _this.frontGraphic.angle = -90;
    return _this;
  }

  _createClass(PieProgress, [{
    key: '_applyCrop',
    value: function _applyCrop() {
      this.frontGraphic.visible = this._progress != _Progress3.default.MaxProgress;
      if (this.frontGraphic.visible) {

        var radius = this.frontGraphic.height / 2;
        var color = this._getColor();
        //let color = Phaser.Color.valueToColor(this._getColor());
        //color = 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
        var new_angle = this.reversed ? Math.PI * 2 * (1 - this.progress) : Math.PI * 2 * this.progress;

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
  }]);

  return PieProgress;
}(_Progress3.default);

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

var _Progress = __webpack_require__(1);

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

var _Graphics = __webpack_require__(0);

Object.defineProperty(exports, 'Graphics', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Graphics).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
});