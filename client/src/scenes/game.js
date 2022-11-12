import Card from "../helpers/card";
import Zone from "../helpers/zone";

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: "Game",
    });
  }

  preload() {
    this.load.image("cardFront", "src/assets/cards/2_of_clubs.png");
    this.load.image("cardBack", "src/assets/card_back.png");
    this.gameWidth = this.sys.game.scale.gameSize.width;
    this.gameHeight = this.sys.game.scale.gameSize.height;
  }

  create() {
    let self = this;

    this.zone = new Zone(this);
    this.dropZone = this.zone.renderZone();
    this.outline = this.zone.renderOutline(this.dropZone);

    this.dealCards = () => {
      for (let i = 0; i < 3; i++) {
        let playerCard = new Card(this, 6, "spades");
        playerCard.render(100 + i * 80, 500);
      }
    };

    this.dealText = this.add
      .text(75, 350, ["DEAL CARDS"])
      .setFontSize(18)
      .setFontFamily("Trebuchet MS")
      .setColor("#00ffff")
      .setInteractive();

    this.dealText.on("pointerdown", () => {
      self.dealCards();
    });

    this.dealText.on("pointerover", () => {
      self.dealText.setColor("#ff69b4");
    });

    this.dealText.on("pointerout", () => {
      self.dealText.setColor("#00ffff");
    });

    this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });
  }

  update() {
    if (this.sys.game.scale.width !== this.gameWidth) {
      this.gameWidth = this.sys.game.scale.width;
    }
    if (this.sys.game.scale.height !== this.gameHeight) {
      this.gameHeight = this.sys.game.scale.height;
    }
  }
}
