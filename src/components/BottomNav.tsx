import { JSX } from "solid-js";
import { A } from "solid-start";
import { IconHome } from "~/components/icons/IconHome";

export const BottomNav = () => {
  return (
    <div class="flex flex-row justify-around p-4">
      <NavButton label={"Hjem"} to={"/"} icon={<IconHome />} />
      <NavButton label={"ferf"} />
    </div>
  );
};

type Button = { label: string; icon?: JSX.Element; to?: string };

const NavButton = ({ icon, to, label }: Button) => {
  return (
    <div class="flex">
      {icon}
      <A href={to ?? ""} class="text-slate-800 ml-1.5">
        {label}
      </A>
    </div>
  );
};
