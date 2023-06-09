import { A } from "solid-start";
import { AppShell } from "~/components/AppShell";

export default function Home() {
  return (
    <AppShell>
      <h1 class="text-2xl text-center text-ui-title font-semibold mt-10">
        Hei, Bertil
      </h1>
      <div class="bg-ui-border h-1 rounded-full w-16 mt-0.5 mb-2 mx-auto" />
      <p class="text-xl text-center font-semibold text-font-default">
        Hva vil du gjøre i dag?
      </p>
      <div class="flex flex-col items-center mt-12 space-y-3">
        <A
          href="/vehicles"
          class="flex justify-center py-3 bg-ui-button-orange w-56 rounded-lg"
        >
          Dine biler
        </A>
        <A
          href="/tasks"
          class="flex justify-center py-3 bg-ui-button-pink w-56 rounded-lg"
        >
          Dine oppgaver
        </A>
        <button class="flex justify-center py-3 bg-ui-button-default w-56 rounded-lg">
          Kamera
        </button>
      </div>
    </AppShell>
  );
}
