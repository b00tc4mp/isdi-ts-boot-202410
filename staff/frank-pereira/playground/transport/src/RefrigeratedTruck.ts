import Transport from "./Transport";
import { IRefrigerated } from "./TransportInterfaces";
import { RefrigeratedDetails } from "./types";

class RefrigeratedTruck extends Transport implements IRefrigerated {
  private _temperature: number = 0;

  constructor(
    chargeWeight: number,
    distanceToBeCovered: number,
    transportBaseConsume: number
  ) {
    super(chargeWeight, distanceToBeCovered, transportBaseConsume);
  }

  get temperature(): number {
    return this._temperature;
  }

  keepTemperature(): void {
    if (this._temperature > 12) {
      this._temperature = 0;
    }
  }

  gainTemperature(): void {
    this._temperature += 5;
  }

  showTransportDetails(): RefrigeratedDetails {
    return {
      truckTemperature: this._temperature,
      transportType: this.constructor.name,
      chargeWeight: `${this.chargeWeight} tonelads`,
      distanceToBeCovered: `${this.distanceToBeCovered} km`,
      transportBaseConsume: `${this.transportBaseConsume} litres / 100km`,
      fuelNeeded: `${this.calculateNeededFuel()} liters`,
    };
  }
}

export default RefrigeratedTruck;
