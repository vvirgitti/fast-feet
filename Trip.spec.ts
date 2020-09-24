import { Trip } from "./Trip";

describe("Trip", () => {
  it("has a difficulty of 1 if the trip name is trip 1", () => {
    const trip = new Trip("trip 1");
    expect(trip.difficulty).toEqual(1);
  });

  it("has a difficulty of 2 if the trip name is trip 2", () => {
    const trip = new Trip("trip 2");
    expect(trip.difficulty).toEqual(2);
  });
});
