import { IconCar } from "~/components/icons/IconCar";
import { IconsDots } from "~/components/icons/IconsDots";
import { IconClock } from "~/components/icons/IconClock";

type Props = {
  title: string;
  regNr: string;
  time: { from: string; to: string };
};

export const TaskCard = (props: Props) => {
  return (
    <div class="border-2 border-black p-3 m-2">
      <div class="flex justify-between">
        <h2 class="text-xl font-bold">{props.title}</h2>
        <IconsDots class="m-1" />
      </div>

      <div class="flex flex-row justify-between">
        <div class="flex flex-row">
          <IconCar class="my-auto mr-2" />
          <p class="font-semibold">XD42069</p>
        </div>

        <div class="flex flex-row">
          <IconClock class="mr-1.5" />
          <p class="font-semibold">
            {props.time.from} - {props.time.to}
          </p>
        </div>
      </div>
    </div>
  );
};
