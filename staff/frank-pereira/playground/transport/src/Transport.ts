abstract class Transport {
  constructor(
    protected chargeWeight: number, // peso en toneladas
    protected distanceToBeCovered: number, // en kilometros
    protected transportBaseConsume: number // litros por cada 100km
  ) {}

  abstract showTransportDetails(): unknown;

  protected calculateNeededFuel(): number {
    const chargeFactor = this.getChargeFactor();

    const adjustedConsumePer100km = this.transportBaseConsume * chargeFactor;

    const totalFuelNeeded =
      (adjustedConsumePer100km / 100) * this.distanceToBeCovered;

    return totalFuelNeeded;
  }

  private getChargeFactor(): number {
    const incrementByTonelad = 0.02; // 2% de incremento por cada tonelada de carga
    const chargeFactor = 1 + this.chargeWeight * incrementByTonelad;

    return chargeFactor;
  }
}

export default Transport;
