import { JSX } from "solid-js";

type Props = {
  bottomNav?: JSX.Element;
  content?: JSX.Element;
};

export const AppShell = (props: Props) => {
  return (
    <main class="flex flex-col h-[100dvh]">
      <div class={"flex-1"}>{props.content}</div>
      {props.bottomNav}
    </main>
  );
};
