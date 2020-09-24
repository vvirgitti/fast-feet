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
});

function testDependencies() {
  const stubTrip: jest.Mocked<TripInterface> = {
    getTripDetails: jest.fn(),
  };

  return {
    stubTrip: stubTrip,
  };
}
