export interface IRefrigerated {
  keepTemperature(): void;
  gainTemperature(): void;
}

export interface IDangerous {
  checkSecurity(): boolean;
  secureCharge(): void;
}
