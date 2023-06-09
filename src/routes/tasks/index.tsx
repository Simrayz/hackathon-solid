import { AppShell } from "~/components/AppShell";
import { TaskCard } from "~/components/TaskCard";
import { createSignal, For, Show } from "solid-js";
import { tasksByDate } from "~/routes/tasks/tasks";

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function TasksPage() {
  const [activeDate, setActiveDate] = createSignal(9);

  const dayTasks = () => tasksByDate[activeDate()] ?? [];

  return (
    <AppShell>
      <div class="flex flex-col px-5">
        <p class="text-xl font-semibold">June</p>
        <div class="flex flex-row w-full justify-between mt-2">
          {weekdays.map((wd, i) => (
            <Day
              active={i + 9 === activeDate()}
              disabled={(tasksByDate[i + 9]?.length ?? 0) === 0}
              monthDay={i + 9}
              weekDay={wd}
              onClick={() => setActiveDate(i + 9)}
            />
          ))}
        </div>
      </div>
      <div class="pt-4">
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
