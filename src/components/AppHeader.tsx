export function AppHeader() {
  return (
    <header class="py-4 px-6 flex items-center justify-between">
      <img src="/carweb-go-large.png" alt="Carweb GO" class="h-12" />
      <button class="rounded-full p-2 hover:bg-gray-200">
        <BellIcon class="h-6 w-6" />
      </button>
    </header>
  );
}

function BellIcon(props: { class?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={props.class}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
      <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
    </svg>
  );
}
