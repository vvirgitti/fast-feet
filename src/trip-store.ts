import { ITrip } from "./trip";

export interface TripInterface {
  getTripDetails<T>(tripName: string): ITrip;
}

export class TripStore {
  public tripsCollection: ITrip[];
  constructor(private trip: TripInterface) {
    this.tripsCollection = [];
  }

  public maxCapacity(tripName: string) {
    return this.tripsCollection.filter((t) => t.name === tripName)[0]
      .maxCustomers;
  }

  public store(tripName: string) {
    const trip = this.trip.getTripDetails(tripName);

    if (this.tripsCollection.filter((t) => t.name === tripName).length === 0) {
      this.tripsCollection.push(trip);
    }
  }

  public delete(tripName: string) {
    const newCollection = this.tripsCollection.filter(
      (t) => t.name !== tripName
    );
    this.tripsCollection = newCollection;
  }
}
