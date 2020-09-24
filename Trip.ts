export class Trip {
  name: string;
  constructor(tripName: string) {
    this.name = tripName;
  }

  public get difficulty(): number {
    return Trip.mapNameToDifficulty(this.name);
  }

  private static mapNameToDifficulty(name: string): number {
    switch (name) {
      case "trip 1":
        return 1;
      case "trip 2":
        return 2;
    }
  }
}
