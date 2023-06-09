import { AppShell } from "~/components/AppShell";
import { TaskCard } from "~/components/TaskCard";
import { createEffect, createSignal, For, Show } from "solid-js";
import { tasksByDate } from "~/routes/tasks/tasks";
import { animate, inView } from "motion";

const weekdays = [
  "Mandag",
  "Tirsdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lørdag",
  "Søndag",
];

export default function TasksPage() {
  const [activeDate, setActiveDate] = createSignal(9);

  const dayTasks = () => tasksByDate[activeDate()] ?? [];

  return (
    <AppShell>
      <div class="flex flex-col ">
        <p class="text-xl font-semibold">Juni</p>
        <div class="flex flex-row w-full justify-between mt-2 px-0.5">
          {weekdays.map((wd, i) => (
            <Day
              active={i + 5 === activeDate()}
              disabled={(tasksByDate[i + 5]?.length ?? 0) === 0}
              monthDay={i + 5}
              weekDay={wd}
              onClick={() => setActiveDate(i + 5)}
            />
          ))}
        </div>
      </div>
      <div class="pt-4 h-full">
        <Show
          when={dayTasks().length > 0}
          fallback={<div class="w-fit mt-10 mx-auto">Ingen opgaver</div>}
        >
          <For each={dayTasks()}>{(task) => <TaskCard {...task} />}</For>
        </Show>
      </div>
    </AppShell>
  );
}

type PropsDay = {
  active?: boolean;
  disabled?: boolean;
  monthDay: number;
  weekDay: string;
  onClick: () => void;
};

const Day = (props: PropsDay) => {
  return (
    <div
      class={`${props.active ? "font-bold" : ""} ${
        props.disabled ? "text-gray-400" : ""
      } flex flex-col items-center`}
      onClick={!props.disabled ? () => props.onClick() : undefined}
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
