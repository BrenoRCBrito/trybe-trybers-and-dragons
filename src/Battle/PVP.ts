import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected player1: SimpleFighter;
  protected player2: SimpleFighter;

  constructor(
    player1: Fighter | SimpleFighter,
    player2: Fighter | SimpleFighter,
  ) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    for (;;) {
      console.log(this.player1);
      console.log(this.player2);
      this.player2.receiveDamage(this.player1.strength);
      if (this.player2.lifePoints === -1) return 1;
      this.player1.receiveDamage(this.player2.strength);
      if (this.player1.lifePoints === -1) return -1;
    }
  }
}
