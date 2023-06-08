import { Card } from "../Card";

export function VehicleTasks() {
  return (
    <div class="space-y-1">
      <h2 class="font-semibold">Neste oppgave</h2>
      <Card class="space-y-2">
        <Card.Title>Fotografering</Card.Title>
        <div class="flex justify-between">
          <div class="flex gap-1">
            <CalendarIcon />
            <p>09.06.2023</p>
          </div>
          <div class="flex gap-1">
            <ClockIcon />
            <p>11:00 - 13:00</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
      <path d="M16 3v4"></path>
      <path d="M8 3v4"></path>
      <path d="M4 11h16"></path>
      <path d="M11 15h1"></path>
      <path d="M12 15v3"></path>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-clock-hour-8"
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
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 12l-3 2"></path>
      <path d="M12 7v5"></path>
    </svg>
  );
}
