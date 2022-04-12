import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  protected player1: SimpleFighter;
  protected monsters: Monster[] | Fighter[] | SimpleFighter[];

  constructor(
    player1: Fighter,
    monsters: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player1);
    this.player1 = player1;
    this.monsters = monsters;
  }

  managePlayerTurn() {
    this.monsters[0].receiveDamage(this.player1.strength);
    if (this.monsters[0].lifePoints === -1) this.monsters.shift();
    if (this.monsters.length === 0) return 1;
  }

  manageMonsterTurn(monstersStrength : number[]) {
    this.player1.receiveDamage(monstersStrength
      .reduce((acc, strengthValue) => acc + strengthValue, 0));
    if (this.player1.lifePoints === -1) return -1;
  }

  fight(): number {
    const monstersStrength = this.monsters.map((monster) => monster.strength);
    for (;;) {
      let result;
      result = this.managePlayerTurn();
      if (result !== undefined) return result;
      result = this.manageMonsterTurn(monstersStrength);
      if (result !== undefined) return result;
    }
  }
}
