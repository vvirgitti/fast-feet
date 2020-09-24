import tripList from "../data/trips.json";

interface ITrip {
  maxCustomers: number;
  name: string;
  difficulty: number;
  type: string;
}

export class Trip {
  constructor() {}

  public details(tripName: string): ITrip {
    try {
      const trip = Trip.returnTrip(tripName);
      return {
        name: trip.name,
        difficulty: trip.difficulty,
        type: trip.type,
        maxCustomers: trip.maxCustomers,
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
