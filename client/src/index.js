import Phaser from "phaser";
import Game from "./scenes/game";
import {
  MIN_SIZE_WIDTH_SCREEN,
  MIN_SIZE_HEIGHT_SCREEN,
  MAX_SIZE_WIDTH_SCREEN,
  MAX_SIZE_HEIGHT_SCREEN,
} from "./constants/dimensions";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-game",
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent: "phaser-game",
    min: {
      width: MIN_SIZE_WIDTH_SCREEN,
      height: MIN_SIZE_HEIGHT_SCREEN,
    },
    max: {
      width: MAX_SIZE_WIDTH_SCREEN,
      height: MAX_SIZE_HEIGHT_SCREEN,
    },
  },
  dom: {
    createContainer: true,
  },
  scene: [Game],
};

const game = new Phaser.Game(config);
