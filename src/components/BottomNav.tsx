import { JSX } from "solid-js";
import { A } from "solid-start";
import { IconHome } from "~/components/icons/IconHome";
import { IconCheck } from "~/components/icons/IconCheck";

export const BottomNav = () => {
  return (
    <div class="flex flex-row justify-around p-4">
      <NavButton label={"Hjem"} to="/" icon={<IconHome />} />
      <NavButton label={"Oppgaver"} to="/tasks" icon={<IconCheck />} />
    </div>
  );
};

type Button = { label: string; icon?: JSX.Element; to?: string };

const NavButton = ({ icon, to, label }: Button) => {
  return (
    <div class="flex flex-col justify-center items-center">
      {icon}
      <A href={to ?? ""} class="text-slate-800 ml-1.5">
        <p class="text-xs mt-1">{label}</p>
      </A>
    </div>
  );
};
