import { JSX } from "solid-js";
import { BottomNav } from "~/components/BottomNav";
import { ParentProps } from "solid-js/types/server/rendering";
import { AppHeader } from "~/components/AppHeader";

type Props = {
  bottomNav?: JSX.Element;
  content?: JSX.Element;
};

export const AppShell = (props: ParentProps<unknown>) => {
  window.addEventListener("scroll", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

  return (
    <main class="flex flex-col h-[100dvh]">
      <AppHeader />
      <div class={"flex-1"}>{props.children}</div>
      <BottomNav />
    </main>
  );
};
