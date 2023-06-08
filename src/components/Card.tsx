import { ParentProps } from "solid-js";

type CardProps = ParentProps<{ class?: string }>;

export function Card(props: CardProps) {
  return (
    <div
      class={`rounded-lg p-3 border border-ui-border bg-white ${props.class}`}
    >
      {props.children}
    </div>
  );
}

Card.Title = (props: CardProps) => {
  return <h3 class={`font-medium ${props.class}`}>{props.children}</h3>;
};

Card.Content = (props: CardProps) => {
  return <p class={props.class}>{props.children}</p>;
};
