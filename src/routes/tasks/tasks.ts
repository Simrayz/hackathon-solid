import { Task } from "~/components/TaskCard";

type MonthDay = number;

export const tasksByDate: Record<MonthDay, Task[]> = {
  9: [
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T09:30:00"),
        end: new Date("2023-06-08T10:30:00"),
      },
      title: "Vask og polering",
    },
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
  10: [
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-10T09:30:00"),
        end: new Date("2023-06-10T10:30:00"),
      },
      title: "Vask og polering",
    },
  ],
  11: [
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T09:30:00"),
        end: new Date("2023-06-08T10:30:00"),
      },
      title: "Vask og polering",
    },
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T09:30:00"),
        end: new Date("2023-06-08T10:30:00"),
      },
      title: "Støvsuging",
    },
    {
      metadata: { createdBy: "Ludwig", created: new Date() },
      regNr: "xd42069",
      time: {
        start: new Date("2023-06-08T09:30:00"),
        end: new Date("2023-06-08T10:30:00"),
      },
      title: "Støvsuging",
    },
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
