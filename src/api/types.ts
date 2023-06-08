export type Vehicle = {
  id: string;
  registrationNumber: string;
  data: VehicleData;
  tasks: VehicleTask[];
  responsibleSalesPerson: ResponsibleSalesPerson;
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
