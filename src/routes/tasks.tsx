import { AppShell } from "~/components/AppShell";
import { Task, TaskCard } from "~/components/TaskCard";
import { For } from "solid-js";

import { format } from "date-fns";

type YYYYMMDD = number;

const tasksByDate: Record<YYYYMMDD, Task[]> = {
  20230608: [
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T09:30:00"),
        end: new Date("2023-06-08T10:30:00"),
      },
      title: "Vask og polering",
    },
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T09:30:00"),
        end: new Date("2023-06-08T10:30:00"),
      },
      title: "Støvsuging",
    },
  ],
  20230610: [
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-10T09:30:00"),
        end: new Date("2023-06-10T10:30:00"),
      },
      title: "Vask og polering",
    },
  ],
  20230612: [
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-12T11:30:00"),
        end: new Date("2023-06-12T12:30:00"),
      },
      title: "Rens av interiør",
    },
  ],
};

// Group tasks by date.
// And sort tasks by time within groups.

export default function Tasks() {
  return (
    <AppShell>
      <div class="p-3">
        <For each={Object.entries(tasksByDate)}>
          {([YYYYMMDD, tasks]) => (
            <div class="flex flex-col">
              <p class="text-2xl font-bold mt-3">
                {format(toDate(YYYYMMDD), "d MMMM")}
              </p>
              <For each={tasks}>{(task) => <TaskCard {...task} />}</For>
            </div>
          )}
        </For>
      </div>
    </AppShell>
  );
}

const toDate = (YYYYMMDD: string) => {
  const str = YYYYMMDD.toString();
  const year = Number.parseInt(str.slice(0, 4));
  const month = Number.parseInt(str.slice(5, 6));
  const day = Number.parseInt(str.slice(6));
  return new Date(year, month, day);
};
