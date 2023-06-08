import { AppShell } from "~/components/AppShell";
import { TaskCard } from "~/components/TaskCard";

export default function Home() {
  return (
    <AppShell>
      <TaskCard
        time={{ from: "16:00", to: "17:30" }}
        regNr="XD42069"
        title="Vask og polering"
      />
    </AppShell>
  );
}
