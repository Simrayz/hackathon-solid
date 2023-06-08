import { ParentProps } from "solid-js";

export function Card(props: ParentProps<{ class?: string }>) {
  return (
    <div
      class={`rounded-lg p-3 border border-teal-400 bg-white ${props.class}`}
    >
      {props.children}
    </div>
  );
}

Card.Title = (props: ParentProps<unknown>) => {
  return <h3 class="font-medium">{props.children}</h3>;
};
