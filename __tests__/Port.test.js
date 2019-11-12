const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

describe("Port", () => {
  it("creates a port", () => {
    const moscow = new Port("Moscow");
    expect(moscow).toBeInstanceOf(Object);
  });
});

describe("Port should have addShip and removeShip methods", () => {
  it("adds a ship", () => {
    const scunthorpePort = new Port("Scunthorpe");
    const testShip = jest.fn();
    scunthorpePort.addShip(testShip);
    expect(scunthorpePort.addShip).toBeInstanceOf(Function);
    expect(scunthorpePort.removeShip).toBeInstanceOf(Function);
    expect(scunthorpePort.ships.length).toBeGreaterThan(0);

    scunthorpePort.removeShip(testShip);

    expect(scunthorpePort.ships.length).toEqual(0);
  });
});

describe("instantiating a ship should add that ship to its starting port", () => {
  it("should add the ship to its first port", () => {
    const port1 = new Port("Port 1");
    const port2 = new Port("Port 2");
    const myItin = new Itinerary([port1, port2]);
    const coolShip = new Ship("A Really Cool Ship", myItin);
    expect(port1.ships).toContain(coolShip);
    expect(coolShip.currentPort).toEqual(port1);
  });
});

describe("removeShip", () => {
  it("should remove the ship", () => {
    const port1 = new Port("Port 1");
    const port2 = new Port("Port 2");
    const port3 = new Port("Port 3");
    const myItin = new Itinerary([port1, port2]);
    const myItin1 = new Itinerary([port2, port3]);
    const coolShip = new Ship("A Really Cool Ship", myItin);
    const shipHappens = new Ship("Ship Happens", myItin1);
    port1.removeShip(coolShip);
    expect(port1.ships.indexOf(coolShip)).toEqual(-1);
    expect(() => port1.removeShip(shipHappens)).toThrowError(
      "That ship isn't here"
    );
  });
});

//need to add tests to make sure ship no longer shows at port after setting sail, and does show in port after docking
