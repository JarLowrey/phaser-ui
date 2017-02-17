/*
 * Star
 * ====
 *
 * Individual star paritcles in the background star emitters
 */
import Phaser from 'phaser-ce';
console.log(Phaser)
export default class Star extends Phaser.Particle {

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
