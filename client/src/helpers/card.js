import { CARD_BACK_PATH, CARD_FRONT_PATH } from "../constants/paths";

export default class Card {
  constructor(scene, rank, suit) {
    this.rank = rank;
    this.suit = suit;

    this.render = (x, y) => {
      scene.load.image("cardFront", this.image());
      let card = scene.add
        .image(x, y, "cardFront")
        .setScale(0.2, 0.2)
        .setInteractive();
      scene.input.setDraggable(card);
      return card;
    };

    this.name = () => {
      let cardName;
      switch (this.rank) {
        case 11:
          cardName = "jack_of_" + this.suit;
          break;
        case 12:
          cardName = "queen_of_" + this.suit;
          break;
        case 13:
          cardName = "king_of_" + this.suit;
          break;
        case 14:
          cardName = "ace_of_" + this.suit;
          break;
        default:
          cardName = this.rank + "_of_" + this.suit;
      }
      return cardName;
    };

    this.image = () => {
      return CARD_FRONT_PATH + this.name() + ".png";
    };
  }
}
