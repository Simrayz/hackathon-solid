import { AppShell } from "~/components/AppShell";
import { VehicleInfo, VehicleKeys, VehicleTasks } from "~/components/vehicles";

export default function VehiclePage() {
  return (
    <AppShell>
      <div class="flex flex-col gap-4">
        <VehicleInfo />
        <VehicleKeys />
        <VehicleTasks />
      </div>
    </AppShell>
  );
}
