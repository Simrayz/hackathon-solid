import { A } from "solid-start";
import { AppShell } from "~/components/AppShell";

export default function Home() {
  return (
    <AppShell hideHeader>
      <h1 class="text-2xl text-ui-title font-semibold mt-10">Hei, Bertil</h1>
      <div class="bg-ui-border h-1 rounded-full w-16 mt-0.5 mb-2" />
      <p class="text-xl font-semibold">
        Hva vil du gjøre i dag? Oppgavene er
        <span class="text-font-pink">&nbsp;klare til deg</span>.
      </p>
      <div class="flex flex-col items-center pt-11 space-y-3">
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
