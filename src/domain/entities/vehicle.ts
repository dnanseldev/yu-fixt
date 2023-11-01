export type VehicleDto = {
  id: string | number;
  name: string;
  brand: string;
  model: string;
  fuelType: string;
  licence: string;
  chassis?: string;
  proprietary?: string;
};

export class Vehicle {
  private vehicle: VehicleDto;

  constructor(vehicle: VehicleDto) {
    this.vehicle = vehicle;
  }
}
