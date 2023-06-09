import { IconCar } from "~/components/icons/IconCar";
import { IconClock } from "~/components/icons/IconClock";
import { format } from "date-fns";
import { Card } from "~/components/Card";
import { animate } from "motion";
import { createEffect } from "solid-js";

export type Task = {
  time: Interval;
  regNr: string;
  title: string;
  metadata: {
    created: Date;
    createdBy: string;
  };
};

type Interval = {
  start: Date;
  end: Date;
};

// We actually have a couple of task cards now...

export const TaskCard = (props: Task) => {
  createEffect(() => {
    animate(
      ".taskk",
      { opacity: [0.07, 1], y: [-20, 0], transform: "none" },
      { easing: "ease-in-out", duration: 0.3 }
    );
  });

  return (
    <Card class="my-4 bg-white taskk">
      <Card.Title>{props.title}</Card.Title>
      <Card.Content class="mt-2">
        <div class="flex flex-row justify-between">
          <div class="flex flex-row">
            <IconCar class="my-auto mr-1" />
            <p>XD42069</p>
          </div>

          <div class="flex flex-row">
            <IconClock class="mr-1.5" />
            <p>
              {`${format(props.time.start, "hh:mm")} - 
            ${format(props.time.end, "hh:mm")}`}
            </p>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};
