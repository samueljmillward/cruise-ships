const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }
  addShip(ship) {
    this.ships.push(ship);
  }
  removeShip(ship) {
    if (this.ships.indexOf(ship) === -1) {
      throw new Error("That ship isn't here");
    }

    this.ships.splice(this.ships.indexOf(ship), 1);
  }
}

module.exports = Port;
