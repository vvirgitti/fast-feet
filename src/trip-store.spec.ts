import { TripInterface, TripStore } from "./trip-store";

describe("Trip Store", () => {
  it("returns 20 as the max number of customers for the Cromer Ridge trip", () => {
    const { stubTrip } = testDependencies();
    const tripStore = new TripStore(stubTrip);

    stubTrip.getTripDetails.mockReturnValueOnce({
      name: "Cromer Ridge",
      difficulty: 1,
      type: "mountain",
      maxCustomers: 20,
    });

    const maxCapacity = tripStore.maxCapacity("Cromer Ridge");
    expect(maxCapacity).toEqual(20);
  });

  describe("store", () => {
    it("stores a Cromer Ridge trip", () => {
      const { stubTrip } = testDependencies();
      const tripStore = new TripStore(stubTrip);

      const tripName = "Cromer Ridge";

      stubTrip.getTripDetails.mockReturnValueOnce({
        name: tripName,
        difficulty: 1,
        type: "mountain",
        maxCustomers: 20,
      });

      tripStore.store(tripName);

      expect(tripStore.tripsCollection.length).toEqual(1);
      expect(tripStore.tripsCollection[0].name).toEqual(tripName);
    });

    it("cannot store the same trip twice", () => {
      const { stubTrip } = testDependencies();
      const tripStore = new TripStore(stubTrip);

      const tripName = "Cromer Ridge";

      stubTrip.getTripDetails.mockReturnValueOnce({
        name: tripName,
        difficulty: 1,
        type: "mountain",
        maxCustomers: 20,
      });

      tripStore.store("Cromer Ridge");
      tripStore.store("Cromer Ridge");

      expect(tripStore.tripsCollection.length).toEqual(1);
    });
  });

  describe("delete", () => {
    it("can delete a trip", () => {
      const { stubTrip } = testDependencies();
      const tripStore = new TripStore(stubTrip);

      const tripName = "Cromer Ridge";
      stubTrip.getTripDetails.mockReturnValue({
        name: tripName,
        difficulty: 1,
        type: "mountain",
        maxCustomers: 20,
      });

      tripStore.store("Cromer Ridge");
      expect(tripStore.tripsCollection.length).toEqual(1);

      tripStore.delete("Cromer Ridge");
      expect(tripStore.tripsCollection.length).toEqual(0);
    });
  });
});

function testDependencies() {
  const stubTrip: jest.Mocked<TripInterface> = {
    getTripDetails: jest.fn(),
  };

  return {
    stubTrip: stubTrip,
  };
}
