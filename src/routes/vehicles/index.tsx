import { createEffect, For } from "solid-js";
import { A } from "solid-start";
import { Vehicle, VehicleService } from "~/api";
import { AppShell } from "~/components/AppShell";
import { Card } from "~/components/Card";
import { animate } from "motion";

export default function VehiclesPage() {
  const vehicles = VehicleService.getVehicles();

  createEffect(() => {
    animate(
      ".carcard",
      {
        opacity: [0.07, 1],
        transformOrigin: ["0 20", "0 0"],
        transform: "none",
      },
      { easing: "ease-in-out", duration: 0.3 }
    );
  });

  return (
    <AppShell>
      <div class="space-y-4">
        <h1 class="font-semibold">Dine Biler</h1>
        <div class="flex flex-col gap-2">
          <For each={vehicles}>
            {(vehicle) => (
              <A href={"/vehicles/" + vehicle.id} class="group">
                <Card class="group-hover:bg-gray-50 space-y-2 carcard">
                  <Card.Title class="flex items-center gap-2 text-ui">
                    <CarIcon />
                    <span>{vehicle.registrationNumber}</span>
                  </Card.Title>
                  <Card.Content class="space-x-1">
                    {getVehicleDescription(vehicle)}
                  </Card.Content>
                </Card>
              </A>
            )}
          </For>
        </div>
      </div>
    </AppShell>
  );
}

function getVehicleDescription({ data }: Vehicle) {
  return [data.brand, data.model, data.modelYear].join(" • ");
}

function CarIcon() {
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
      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
    </svg>
  );
}
