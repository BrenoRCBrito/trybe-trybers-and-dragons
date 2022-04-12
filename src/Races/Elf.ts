import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _instancesCount: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instancesCount = Elf._instancesCount === undefined ? 
      1 : Elf._instancesCount + 1;
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instancesCount;
  }
}
