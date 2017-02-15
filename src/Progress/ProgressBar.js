/* jshint esversion: 6 */

import Progress from './Progress'

export default class ProgressBar extends Progress {

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
