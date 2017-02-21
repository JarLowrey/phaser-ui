/*
 * Game state
 * ==========
 *
 * Game State to test phaser-ui components
 */

//import ProgressBar from '../objects/ProgressBar';
//import ProgressPie from '../objects/ProgressPie';
import * as phaserUi from 'phaser-ui';

export default class Game extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = "#4488AA";
    this.testProgressBar();
    this.testProgressPie();
  }

  testProgressPie() {
    //create pies
    let pie = new phaserUi.ProgressPie(this.game, 100, this.getPieBitmapData, 2, 'Hello World');
    pie.x = this.game.world.centerX;
    pie.y = this.game.world.centerY;

    let pie2 = new phaserUi.ProgressPie(this.game, 100, this.getPieBitmapData, 2, 'Hello World');
    pie2.x = this.game.world.centerX;
    pie2.y = this.game.world.centerY + 100;
    pie2.reversed = true;

    //tween pie data
    this.game.add.tween(pie).to({
      progress: 0
    }, 2000, 'Linear', true, 0, -1, true);

    this.game.add.tween(pie2).to({
      progress: 0
    }, 2000, 'Linear', true, 0, -1, true);

  }

  testProgressBar() {
    //create bars
    let bar = new phaserUi.ProgressBar(this.game, 100, 20, this.getBarBitmapData, 2, 'Hello World');
    bar.x = this.game.world.centerX - 100;
    bar.y = this.game.world.centerY;

    let bar2 = new phaserUi.ProgressBar(this.game, 100, 20, this.getBarBitmapData, 2, 'Hello World');
    bar2.x = this.game.world.centerX - 100;
    bar2.y = this.game.world.centerY + 20;
    bar2.reversed = true;

    //tween bar data
    this.game.add.tween(bar).to({
      progress: 0
    }, 2000, 'Linear', true, 0, -1, true);

    this.game.add.tween(bar2).to({
      progress: 0
    }, 2000, 'Linear', true, 0, -1, true);
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

  getPieBitmapData(width, height) {
    var bmd = this.game.add.bitmapData(width, height);

    bmd.circle(height / 2, height / 2, height / 2, '#fff');

    return bmd;
  }
}
