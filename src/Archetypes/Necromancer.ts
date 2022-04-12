import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instancesCount: number;
  constructor(name: string) {
    super(name);
    Necromancer._instancesCount =
      Necromancer._instancesCount === undefined
        ? 1
        : Necromancer._instancesCount + 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instancesCount;
  }
}
