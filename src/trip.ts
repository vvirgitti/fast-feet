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
    const trip = Trip.returnTrip(this.name);
    return {
      name: trip.name,
      difficulty: trip.difficulty,
      type: trip.type,
    };
  }

  private static returnTrip(name: string): ITrip {
    const trips: ITrip[] = tripList;
    return trips.filter((t) => t.name === name)[0];
  }
}
