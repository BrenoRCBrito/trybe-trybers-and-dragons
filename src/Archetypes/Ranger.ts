import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _instancesCount: number;
  constructor(name: string) {
    super(name);
    Ranger._instancesCount = Ranger._instancesCount === undefined 
      ? 1 : Ranger._instancesCount + 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instancesCount;
  }
}
