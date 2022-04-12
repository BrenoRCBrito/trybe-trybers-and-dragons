import { SimpleFighter } from '../Fighter';

abstract class Battle {
  protected player1: SimpleFighter;
  constructor(protected player: SimpleFighter) {
    this.player1 = player;
  }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
