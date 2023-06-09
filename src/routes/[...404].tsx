import { A } from "solid-start";
import { AppShell } from "~/components/AppShell";

export default function NotFound() {
  return (
    <AppShell>
      <main class="text-center mx-auto text-font-default p-4">
        <h1 class="max-6-xs text-3xl font-thin uppercase my-16">
          Oida, denne siden finnes ikke.
        </h1>
      </main>
    </AppShell>
  );
}
