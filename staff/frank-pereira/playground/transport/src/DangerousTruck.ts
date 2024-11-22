import Transport from "./Transport";
import { IDangerous } from "./TransportInterfaces";
import { DangerousCharge, DangerousTruckDetails } from "./types";

class DangerousTruck extends Transport implements IDangerous {
  constructor(
    chargeWeight: number,
    distanceToBeCovered: number,
    transportBaseConsume: number,
    private charge: DangerousCharge
  ) {
    super(chargeWeight, distanceToBeCovered, transportBaseConsume);
  }

  checkSecurity(): boolean {
    return this.charge.items.every(({ isSafe }) => isSafe);
  }

  secureCharge(): void {
    if (!this.checkSecurity()) {
      this.charge.items.forEach((item) => (item.isSafe = true));
    } else {
      console.log("The charge are in perfect conditions !");
    }
  }

  showTransportDetails(): DangerousTruckDetails {
    return {
      charge: [...this.charge.items],
      transportType: this.constructor.name,
      chargeWeight: `${this.chargeWeight} tonelads`,
      distanceToBeCovered: `${this.distanceToBeCovered} km`,
      transportBaseConsume: `${this.transportBaseConsume} litres / 100km`,
      fuelNeeded: `${this.calculateNeededFuel()} liters`,
    };
  }
}

export default DangerousTruck;
