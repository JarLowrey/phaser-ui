/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

import ProgressPie from './phaser-ui';

export default class Game extends Phaser.State {

  create() {
    var pie = new ProgressPie(this.game, this.game.world.centerX, this.game.world.centerY);
    console.log(pie)
  }

}
