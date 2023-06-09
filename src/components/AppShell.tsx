import { JSX, Show } from "solid-js";
import { BottomNav } from "~/components/BottomNav";
import { ParentProps } from "solid-js/types/server/rendering";
import { AppHeader } from "~/components/AppHeader";
import { ReloadPrompt } from "./Reload";

type Props = {
  hideHeader?: boolean;
  bottomNav?: JSX.Element;
  content?: JSX.Element;
};

export const AppShell = (props: ParentProps<Props>) => {
  return (
    <main class="flex flex-col h-[100dvh]">
      <Show when={!props.hideHeader}>
        <AppHeader />
      </Show>
      <div class="flex flex-col flex-1 px-6 overflow-auto relative overflow-x-hidden">
        {props.children}
      </div>
      <BottomNav />
      <ReloadPrompt />
    </main>
  );
};
