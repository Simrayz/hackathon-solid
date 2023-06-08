import { vehiclesData } from "./vehicles";

export const VehicleService = {
  getVehicles: () => vehiclesData,
  getVehicle: (id: string) => vehiclesData.find((vehicle) => vehicle.id === id),
};
