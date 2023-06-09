import { AppShell } from "~/components/AppShell";
import { Task, TaskCard } from "~/components/TaskCard";
import { createSignal, For } from "solid-js";

import { format } from "date-fns";

type YYYYMMDD = number;

const tasksByDate: Record<YYYYMMDD, Task[]> = {
  9: [
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
  10: [
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
  11: [
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
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T09:30:00"),
        end: new Date("2023-06-08T10:30:00"),
      },
      title: "Støvsuging",
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
  12: [
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
  const [activeDate, setActiveDate] = createSignal(13);

  return (
    <AppShell>
      <div class="flex flex-col">
        <Dates activeDate={activeDate()} setActiveDay={setActiveDate} />
        <div class="pt-4">
          <For each={tasksByDate[activeDate()]}>
            {(task) => <TaskCard {...task} />}
          </For>
        </div>
      </div>
    </AppShell>
  );
}

const Dates = (props: {
  activeDate: number;
  setActiveDay: (date: number) => void;
}) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div class="flex flex-col px-5">
      <p class="text-xl font-semibold">June</p>
      <div class="flex flex-row w-full justify-between mt-2">
        {days.map((wd, i) => (
          <Day
            active={i + 9 === props.activeDate}
            monthDay={i + 9}
            weekDay={wd}
            onClick={() => props.setActiveDay(i + 9)}
          />
        ))}
      </div>
    </div>
  );
};

type PropsDay = {
  active?: boolean;
  monthDay: number;
  weekDay: string;
  onClick: () => void;
};
const Day = (props: PropsDay) => {
  return (
    <div
      class={`${props.active ? "font-bold" : ""} flex flex-col items-center`}
      onClick={() => props.onClick()}
    >
      <p>{props.weekDay.slice(0, 3)}</p>
      <p>{props.monthDay}</p>
    </div>
  );
};

const toDate = (YYYYMMDD: string) => {
  const str = YYYYMMDD.toString();
  const year = Number.parseInt(str.slice(0, 4));
  const month = Number.parseInt(str.slice(5, 6));
  const day = Number.parseInt(str.slice(6));
  return new Date(year, month, day);
};
