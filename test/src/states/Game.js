/*
 * Game state
 * ==========
 *
 * Game State to test phaser-ui components
 */

//import ProgressBar from '../objects/ProgressBar';
//import ProgressPie from '../objects/ProgressPie';
import * as PhaserUi from 'phaser-ui';

export default class Game extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = '#4488AA';
    console.log('PhaserUi = ', PhaserUi);

    this.testProgressBar();
    this.testProgressPie();
    this.testToggleSlider();
  }

  testToggleSlider() {

    let toast = new PhaserUi.Toast(this.game);

    let ts = new PhaserUi.ToggleSlider(this.game, function(isOn) {
      toast.show('Toggle is on = ' + isOn, {
        fontSize: 12
      });
    });
    ts.x = this.game.world.centerX - 200;
    ts.y = this.game.world.centerY;
  }

  testProgressPie() {
    //create pies
    let pie = new PhaserUi.ProgressPie(this.game, 100, this.getPieBitmapData, 2, '');
    pie.x = this.game.world.centerX;
    pie.y = this.game.world.centerY;

    let pie2 = new PhaserUi.ProgressPie(this.game, 100, this.getPieBitmapData, 2, 'Hello World');
    pie2.x = this.game.world.centerX;
    pie2.y = this.game.world.centerY + 100;
    pie2.reversed = true;

    let pie3 = new PhaserUi.ProgressPie(this.game, 100, this.getPieBitmapData, 40, 'Hello World');
    pie3.x = this.game.world.centerX;
    pie3.y = this.game.world.centerY + 200;
    pie3.makePressable();
    pie3.progress = 0.88;

    //tween pie data
    this.game.add.tween(pie).to({
      progress: 1
    }, 2000, 'Linear', true, 0, -1, true);

    this.game.add.tween(pie2).to({
      progress: 1
    }, 2000, 'Linear', true, 0, -1, true);

  }

  testProgressBar() {
    //create bars
    let bar = new PhaserUi.ProgressBar(this.game, 100, 20, null, 10, '');
    bar.x = this.game.world.centerX - 100;
    bar.y = this.game.world.centerY;

    let bar2 = new PhaserUi.ProgressBar(this.game, 100, 20, PhaserUi.Graphics.roundedRectBmd, 5, '');
    bar2.x = this.game.world.centerX - 100;
    bar2.y = this.game.world.centerY + 20;
    bar2.reversed = true;
    bar2.progress = 1;

    let bar3 = new PhaserUi.ProgressBar(this.game, 100, 20, PhaserUi.Graphics.roundedRectBmd, 10, '');
    bar3.x = this.game.world.centerX - 100;
    bar3.y = this.game.world.centerY + 40;
    bar3.reversed = true;

    let bar4 = new PhaserUi.ProgressBar(this.game, 100, 20, null, 2, 'Hello World');
    bar4.x = this.game.world.centerX - 100;
    bar4.y = this.game.world.centerY + 60;
    bar4.progress = 0.5;
    bar4.makePressable(function() {
      console.log('Wheeeee!')
    }, 0x123456, 0xffffff);

    //tween bar data
    this.game.add.tween(bar).to({
      progress: 1
    }, 2000, 'Linear', true, 0, -1, true);

    this.game.add.tween(bar3).to({
      progress: 1
    }, 2000, 'Linear', true, 0, -1, true);
  }

  getPieBitmapData(game, width, height) {
    var bmd = game.add.bitmapData(width, height);

    bmd.circle(height / 2, height / 2, height / 2, '#fff');

    return bmd;
  }
}
