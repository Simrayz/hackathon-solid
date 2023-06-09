import { For } from "solid-js";
import { A } from "solid-start";
import { Vehicle, VehicleService } from "~/api";
import { AppShell } from "~/components/AppShell";
import { Card } from "~/components/Card";

export default function VehicleNotFoundPage() {
  return (
    <AppShell>
      <div class="space-y-4 py-10">
        <h1 class="font-semibold">
          Oida, vi fant ingen biler med dette søket.
        </h1>
        <A
          href="/vehicles"
          class="bg-ui-button-default py-3 w-56 flex justify-center rounded-lg mx-auto"
        >
          Velg en bil fra oversikten
        </A>
      </div>
    </AppShell>
  );
}
