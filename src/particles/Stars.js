/* jshint esversion: 6 */

/*
 * Stars
 * ====
 * Parallax scrolling star field
 * https://gamedevelopment.tutsplus.com/tutorials/parallax-scrolling-a-simple-effective-way-to-add-depth-to-a-2d-game--cms-21510
 * TODO: star particles have infinite life, choose a random position when falling offscreen, iron out kinks in the vals used for para
 */
import Star from './Star';
import Phaser from 'phaser-ce';

export default class Stars {

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
        emitter.particleClass = Star;
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
