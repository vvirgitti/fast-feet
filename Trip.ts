export class Trip {
  name: string;
  constructor(tripName: string) {
    this.name = tripName;
  }

  public get difficulty(): number {
    return Trip.mapNameToDifficulty(this.name);
  }

  public get type(): string {
    return Trip.mapNameToType(this.name);
  }

  private static mapNameToDifficulty(name: string): number {
    switch (name) {
      case "trip 1":
        return 1;
      case "trip 2":
        return 2;
    }
  }

  private static mapNameToType(name: string): string {
    switch (name) {
      case "trip 1":
        return "mountain";
      case "trip 2":
        return "road";
    }
  }
}
