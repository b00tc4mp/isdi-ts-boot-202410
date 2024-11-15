export type TransportDetails = {
  transportType: string;
  chargeWeight: string;
  distanceToBeCovered: string;
  transportBaseConsume: string;
  fuelNeeded: string;
};

export type RefrigeratedDetails = TransportDetails & {
  truckTemperature: number;
};

export type DangerousTruckDetails = TransportDetails & {
  charge: { id: string; isSafe: boolean }[];
};

export type DangerousCharge = {
  category: "dangerous";
  items: {
    id: string;
    isSafe: boolean;
  }[];
};

export type RefrigeratedCharge = {
  category: "refrigerated";
  items: {
    id: string;
  };
};
