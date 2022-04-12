import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instancesCount: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instancesCount = Halfling._instancesCount === undefined 
      ? 1 : Halfling._instancesCount + 1;
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instancesCount;
  }
}
