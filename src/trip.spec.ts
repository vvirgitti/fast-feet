import { Trip } from "./trip";

describe("Trip", () => {
  it("returns Cromer Ridge in the details", () => {
    const trip = new Trip();
    expect(trip.getTripDetails("Cromer Ridge").name).toEqual("Cromer Ridge");
  });

  it("throws an error if the trip name does not exist", () => {
    const trip = new Trip();
    expect(() => trip.getTripDetails("fake")).toThrowError(
      "This trip does not exist"
    );
  });

  it("has a difficulty of 1 if the trip name is Camel trail", () => {
    const trip = new Trip();
    expect(trip.getTripDetails("Camel Trail").difficulty).toEqual(1);
  });

  it("has a difficulty of 2 if the trip name is Cromer Ridge", () => {
    const trip = new Trip();
    expect(trip.getTripDetails("Cromer Ridge").difficulty).toEqual(2);
  });

  it("is a mountain bike trip if the trip name is Dalby Forest", () => {
    const trip = new Trip();
    expect(trip.getTripDetails("Dalby Forest").type).toEqual("mountain");
  });

  it("returns 25 max customers if the trip name is Dalby Forest", () => {
    const trip = new Trip();
    expect(trip.getTripDetails("Dalby Forest").maxCustomers).toEqual(25);
  });
});
