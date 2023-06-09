import { useNavigate, useParams } from "solid-start";
import { VehicleService } from "~/api";
import { AppShell } from "~/components/AppShell";
import { VehicleInfo, VehicleKeys, VehicleTasks } from "~/components/vehicles";

export default function VehiclePage() {
  const params = useParams();
  const vehicle = VehicleService.getVehicle(params.vehicleId);
  const navigate = useNavigate();

  if (!vehicle) {
    navigate("/vehicles/not-found");
    return;
  }

  return (
    <AppShell>
      <div class="flex flex-col gap-4">
        <VehicleInfo vehicle={vehicle} />
        <VehicleKeys keys={vehicle.keys} />
        <VehicleTasks />
      </div>
    </AppShell>
  );
}
