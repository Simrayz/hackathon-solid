import { JSX } from "solid-js";
import { A } from "solid-start";
import { IconHome } from "~/components/icons/IconHome";
import { IconCar } from "./icons/IconCar";
import { IconCheck } from "~/components/icons/IconCheck";

export const BottomNav = () => {
  return (
    <div class="flex flex-row justify-around py-4">
      <NavButton label={"Hjem"} to="/" icon={<IconHome />} exact />
      <NavButton label="Biler" to="/vehicles" icon={<IconCar />} />
      <NavButton label={"Oppgaver"} to="/tasks" icon={<IconCheck />} />
    </div>
  );
};

type NavButtonProps = {
  label: string;
  icon?: JSX.Element;
  to?: string;
  exact?: boolean;
};

const NavButton = ({ icon, to, label, exact }: NavButtonProps) => {
  return (
    <A
      href={to ?? ""}
      class="text-slate-800 flex flex-col justify-center items-center gap-1"
      activeClass="text-ui-active"
      end={exact}
    >
      {icon}
      <p class="text-xs font-medium">{label}</p>
    </A>
  );
};
