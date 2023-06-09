import { Vehicle } from "~/api";

type VehicleInfoProps = {
  vehicle: Vehicle;
};
export function VehicleInfo({ vehicle }: VehicleInfoProps) {
  return (
    <div class="space-y-4">
      <div>
        <h1 class="font-bold">{vehicle.registrationNumber}</h1>
        <p>
          {vehicle.data.brand} {vehicle.data.model} {vehicle.data.modelYear}
        </p>
      </div>
      <div class="rounded-lg overflow-hidden">
        <img
          src={
            vehicle.image ??
            "https://hsvdatabase.com.au/wp-content/uploads/2018/05/placeholder.png"
          }
          class="h-40 w-full object-cover object-center"
          alt="image of the vehicle"
        />
      </div>
      <VehicleLocation vehicle={vehicle} />
    </div>
  );
}

type VehicleLocationProps = {
  vehicle: Vehicle;
};

function VehicleLocation({ vehicle }: VehicleLocationProps) {
  return (
    <div class="flex items-center gap-1">
      <MapPin />
      <p>
        {vehicle.location?.name}, {vehicle.location?.address}
      </p>
    </div>
  );
}

export function MapPin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
    </svg>
  );
}
