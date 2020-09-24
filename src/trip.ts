import tripList from "../data/trips.json";

interface ITrip {
  name: string;
  difficulty: number;
  type: string;
}

export class Trip {
  name: string;
  constructor(tripName: string) {
    this.name = tripName;
  }

  public get details(): ITrip {
    try {
      const trip = Trip.returnTrip(this.name);
      return {
        name: trip.name,
        difficulty: trip.difficulty,
        type: trip.type,
      };
    } catch (e) {
      throw e;
    }
  }

  private static returnTrip(name: string): ITrip {
    const trips: ITrip[] = tripList;
    const matchingTrip = trips.filter((t) => t.name === name);

    if (!matchingTrip.length) {
      throw new Error("This trip does not exist");
    } else {
      return matchingTrip[0];
    }
  }
}
