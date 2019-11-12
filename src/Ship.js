const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");
class Ship {
  constructor(name, itin) {
    this.name = name;
    this.currentPort = itin.ports[0];
    this.atSea = false;
    this.previousPort = null;
    this.portsVisited = [];
    this.itinerary = itin;
    this.currentPort.addShip(this);
  }
  setSail() {
    if (this.atSea === true) {
      throw new Error("You can't set sail while already at sea!");
    }
    if (this.portsVisited.length === this.itinerary.ports.length - 1) {
      throw new Error("End of itinerary reached");
    }
    this.atSea = true;
    this.portsVisited.push(this.currentPort);
    this.previousPort = this.portsVisited[this.portsVisited.length - 1]; // this should help with refactoring if the itinerary ends up able to take an arbitrary number of ports
    this.currentPort.removeShip(this);
    this.currentPort = null;
  }

  dock() {
    if (this.atSea === false) {
      throw new Error("You can't dock while already at a port!");
    }
    this.atSea = false;
    this.currentPort = this.itinerary.ports[this.portsVisited.length];
    this.currentPort.addShip(this);
  }
}

module.exports = Ship;
