const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("ship is created", () => {
  let testItin;
  let hmsGoodTimes;

  beforeEach(() => {
    testItin = new Itinerary([jest.fn(), jest.fn()]);
    hmsGoodTimes = new Ship("Good Times", testItin);
  });
  it("creates an object", () => {
    expect(hmsGoodTimes).toBeInstanceOf(Object);
  });

  it("has a starting point for a ship", () => {
    expect(hmsGoodTimes.currentPort).toBeTruthy();
  });
});

describe("ship has a Port object", () => {
  let testPort1;
  let testPort2;
  let testItin;
  let hmsGoodTimes;

  beforeEach(() => {
    testPort1 = new Port("testPort1");
    testPort2 = new Port("testPort2");
    testItin = new Itinerary([testPort1, testPort2]);
    hmsGoodTimes = new Ship("Good Times", testItin);
  });

  it("has a starting point for a ship", () => {
    expect(hmsGoodTimes.currentPort).toBeInstanceOf(Object);
  });
});

describe("ship sets sail", () => {
  let testPort1;
  let testItin;
  let hmsGoodTimes;

  beforeEach(() => {
    testPort1 = jest.fn();
    testItin = new Itinerary([testPort1, jest.fn()]);
    hmsGoodTimes = new Ship("Good Times", testItin);
  });
  it("it is at sea after setSail", () => {
    expect(hmsGoodTimes.setSail).toBeTruthy();
  });
  it("at sea", () => {
    hmsGoodTimes.setSail();
    expect(hmsGoodTimes.atSea).toBe(true);
  });
  it("added port to ports visited", () => {
    hmsGoodTimes.setSail();
    expect(hmsGoodTimes.portsVisited[0]).toEqual(testPort1);
  });
});

describe("Checks ports status", () => {
  let testItin;
  let hmsGoodTimes;

  beforeEach(() => {
    testItin = new Itinerary([jest.fn(), jest.fn()]);
    hmsGoodTimes = new Ship("Good Times", testItin);
    hmsGoodTimes.setSail();
  });

  it("Ports are logged to portsVisited", () => {
    expect(hmsGoodTimes.portsVisited.length).toBeGreaterThan(0);
  });
  it("Current port empty when at sea", () => {
    expect(hmsGoodTimes.currentPort).toBe(null);
    expect(hmsGoodTimes.previousPort).toBe(testItin.ports[0]);
  });
});

describe("Checks dock function", () => {
  let testPort2;
  let testItin;
  let hmsGoodTimes;

  beforeEach(() => {
    testPort2 = jest.fn();
    testItin = new Itinerary([jest.fn(), testPort2]);
    hmsGoodTimes = new Ship("Good Times", testItin);
    hmsGoodTimes.setSail();
    hmsGoodTimes.dock();
  });
  it("dock attempt", () => {
    expect(hmsGoodTimes.atSea).toBe(false);
  });
  it("Current port is docked port", () => {
    expect(hmsGoodTimes.currentPort).toEqual(testPort2);
  });
});
