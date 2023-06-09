import { Task } from "~/components/TaskCard";

type MonthDay = number;

export const tasksByDate: Record<MonthDay, Task[]> = {
  6: [
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T09:30:00"),
        end: new Date("2023-06-08T10:30:00"),
      },
      title: "Bytte vindu",
    },
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T12:30:00"),
        end: new Date("2023-06-08T13:30:00"),
      },
      title: "Vindusvask",
    },
  ],
  7: [
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T09:30:00"),
        end: new Date("2023-06-08T10:30:00"),
      },
      title: "Støvsuging",
    },
  ],
  9: [
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T09:30:00"),
        end: new Date("2023-06-08T10:00:00"),
      },
      title: "Vask og polering",
    },
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T10:10:00"),
        end: new Date("2023-06-08T10:30:00"),
      },
      title: "Støvsuging",
    },
  ],
  13: [
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-12T11:30:00"),
        end: new Date("2023-06-12T12:30:00"),
      },
      title: "Rens av interiør",
    },
  ],
};
