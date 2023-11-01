import { Guid } from "../interfaces/utils";

export type VehicleDto = {
  eID: Guid;
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
