export type Vehicle = {
  id: string;
  registrationNumber: string;
  image?: string;
  location?: VehicleLocation;
  data: VehicleData;
  tasks: VehicleTask[];
  keys: VehicleKey[];
  responsibleSalesPerson: ResponsibleSalesPerson;
};
export type VehicleLocation = {
  id: string;
  name: string;
  address: string;
};
export type VehicleData = {
  brand: string;
  model: string;
  variant: string;
  modelYear: number;
};
export type VehicleTask = {
  id: string;
  identifier: string;
  description: string;
  responsibleSalesPerson: ResponsibleSalesPerson;
  dueDate: string | null;
};
export type ResponsibleSalesPerson = {
  id: string;
  name: string;
};
export type VehicleKey = {
  id: string;
  location?: {
    id: string;
    name: string;
  };
  responsible?: ResponsibleSalesPerson;
  updatedAt: string;
};
