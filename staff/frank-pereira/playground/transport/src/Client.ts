import Truck from "./Truck";
import DangerousTruck from "./DangerousTruck";
import { DangerousCharge } from "./types";
import RefrigeratedTruck from "./RefrigeratedTruck";

const truck1 = new Truck(20, 200, 30);
console.log("truck1 :>>", truck1.showTransportDetails());

const dangerousCharge1: DangerousCharge = {
  category: "dangerous",
  items: [
    {
      id: "1qwe234",
      isSafe: true,
    },
    {
      id: "1qwe567",
      isSafe: true,
    },
    {
      id: "1qwe890",
      isSafe: false,
    },
  ],
};

const dangerousTruck1 = new DangerousTruck(10, 120, 20, dangerousCharge1);
console.log("dangerousTruck1 :>>", dangerousTruck1.showTransportDetails());

console.log(dangerousTruck1.checkSecurity());

dangerousTruck1.secureCharge();
console.log("dangerousTruck1 :>>", dangerousTruck1.showTransportDetails());

const refrigeratedTruck = new RefrigeratedTruck(30, 90, 16);
console.log("refrigeratedTruck :>> ", refrigeratedTruck.showTransportDetails());

refrigeratedTruck.gainTemperature();

console.log(
  "refrigeratedTruck.temperature :>> ",
  refrigeratedTruck.temperature
);

refrigeratedTruck.gainTemperature();
refrigeratedTruck.gainTemperature();

console.log(
  "refrigeratedTruck.temperature :>> ",
  refrigeratedTruck.temperature
);

refrigeratedTruck.keepTemperature();

console.log("refrigeratedTruck :>> ", refrigeratedTruck.showTransportDetails());
