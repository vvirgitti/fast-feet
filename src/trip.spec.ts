import { Trip } from "./trip";

describe("Trip", () => {
  it("returns Cromer Ridge in the details", () => {
    const trip = new Trip("Cromer Ridge");
    expect(trip.details.name).toEqual("Cromer Ridge");
  });

  it("throws an error if the trip name does not exist", () => {
    const trip = new Trip("fake");
    expect(() => trip.details).toThrowError("This trip does not exist");
  });

  it("has a difficulty of 1 if the trip name is Camel trail", () => {
    const trip = new Trip("Camel Trail");
    expect(trip.details.difficulty).toEqual(1);
  });

  it("has a difficulty of 2 if the trip name is Cromer Ridge", () => {
    const trip = new Trip("Cromer Ridge");
    expect(trip.details.difficulty).toEqual(2);
  });

  it("is a mountain bike trip if the trip name is Dalby Forest", () => {
    const trip = new Trip("Dalby Forest");
    expect(trip.details.type).toEqual("mountain");
  });

  it("returns 25 max customers if the trip name is Dalby Forest", () => {
    const trip = new Trip("Dalby Forest");
    expect(trip.details.maxCustomers).toEqual(25);
  });
});
