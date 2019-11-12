const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");
const Ship = require("../src/Ship.js");

describe("itinerary functions", () => {
  it("creates an itinerary", () => {
    const itinerary = new Itinerary(["port1", "port2"]);
    expect(itinerary).toBeInstanceOf(Object);
  });
  it("adds ports to itinerary", () => {
    const leningrad = jest.fn();
    const stalingrad = jest.fn();
    const itinerary = new Itinerary([leningrad, stalingrad]);
    expect(itinerary.ports).toEqual([leningrad, stalingrad]);
  });
});
