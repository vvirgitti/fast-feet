import { ITrip } from "./trip";

export interface TripInterface {
  getTripDetails<T>(tripName: string): ITrip;
}

export class TripStore {
  constructor(private trip: TripInterface) {}

  public maxCapacity(tripName: string) {
    return this.trip.getTripDetails(tripName).maxCustomers;
  }
}
