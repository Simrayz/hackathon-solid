import { format } from "date-fns";
import { For, ParentProps, Show } from "solid-js";
import { VehicleKey } from "~/api";
import { MapPin } from "./VehicleInfo";

type VehicleKeysProps = {
  keys: VehicleKey[];
};

export function VehicleKeys({ keys }: VehicleKeysProps) {
  return (
    <div class="space-y-1">
      <h2 class="font-semibold">Nøkler</h2>
      <div class="rounded-lg overflow-hidden border border-ui-border divide-y divide-ui-border">
        <For each={keys}>{(key) => <VehicleKeyRow key={key} />}</For>
      </div>
    </div>
  );
}

function VehicleKeyRow({ key }: { key: VehicleKey }) {
  const rowTitle = key.responsible?.name ?? key.location?.name;
  const formattedDate = format(new Date(key.updatedAt), "dd.MM.yyyy HH:mm");
  const icon = key.responsible ? UserIcon() : MapPin();

  return (
    <div class="px-4 py-2 bg-white flex items-center">
      <div class="space-y-0.5 flex-1">
        <div class="font-medium flex gap-0.5">
          <div>
            <Show when={key.responsible} fallback={<MapPin />}>
              <UserIcon />
            </Show>
          </div>
          {rowTitle}
        </div>
        <div>{formattedDate}</div>
      </div>
      <button type="button" class="text-right text-ui-active">
        Endre
      </button>
    </div>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-user"
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
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
    </svg>
  );
}
