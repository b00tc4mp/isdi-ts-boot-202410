import Transport from "./Transport";
import { TransportDetails } from "./types";

class Truck extends Transport {
  constructor(
    chargeWeight: number,
    distanceToBeCovered: number,
    transportBaseConsume: number
  ) {
    super(chargeWeight, distanceToBeCovered, transportBaseConsume);
  }

  showTransportDetails(): TransportDetails {
    return {
      transportType: this.constructor.name,
      chargeWeight: `${this.chargeWeight} tonelads`,
      distanceToBeCovered: `${this.distanceToBeCovered} km`,
      transportBaseConsume: `${this.transportBaseConsume} litres / 100km`,
      fuelNeeded: `${this.calculateNeededFuel()} liters`,
    };
  }
}

export default Truck;
