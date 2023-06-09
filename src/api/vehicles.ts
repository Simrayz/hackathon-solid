import { Vehicle } from "./types";

export const vehiclesData: Vehicle[] = [
  {
    id: "a96498a4-aa08-4803-a3ef-b402ae109586",
    registrationNumber: "UX12345",
    image: "/renault-clio-2014.jpeg",
    data: {
      brand: "Renault",
      model: "Clio",
      variant: "TCe 90 Dynamique",
      modelYear: 2014,
    },
    location: {
      id: "aaed9506-10fd-4a22-b02c-eaa6c6c53dc0",
      name: "Poleringshall",
      address: "Tempevegen 11",
    },
    keys: [
      {
        id: "blablabla",
        location: {
          id: "skap-b29",
          name: "Skap B29",
        },
        updatedAt: "2022-06-09T07:45:00.000Z",
      },
      {
        id: "blablabla",
        responsible: {
          id: "a50cb76a-c40f-4cc4-855b-ac2b1ed976cc",
          name: "Steve Holt",
        },
        updatedAt: "2022-06-09T08:45:00.000Z",
      },
    ],
    tasks: [
      {
        id: "631b0bb0-c158-4880-ac44-8aa83060a6ed",
        identifier: "Mottakskontroll",
        description: "Receival.Task.ReceivalInspection.Started",
        dueDate: null,
        responsibleSalesPerson: {
          id: "a50cb76a-c40f-4cc4-855b-ac2b1ed976cc",
          name: "Steve Holt",
        },
      },
      {
        id: "c68c50ca-7abe-4dad-8293-b858fa9c2416",
        identifier: "Test",
        description: "RepairShop.Task.AssessmentOrderTask.Started",
        dueDate: null,
        responsibleSalesPerson: {
          id: "a50cb76a-c40f-4cc4-855b-ac2b1ed976cc",
          name: "Steve Holt",
        },
      },
    ],
    responsibleSalesPerson: {
      id: "a50cb76a-c40f-4cc4-855b-ac2b1ed976cc",
      name: "Steve Holt",
    },
  },
  {
    id: "067c96b7-4cea-41ef-8466-88b658fb212c",
    registrationNumber: "EL80085",
    image:
      "https://cdn.euroncap.com/media/4875/tesla_model_s_2014_uncrashed.jpg",
    location: {
      id: "aaed9506-10fd-4a22-b02c-eaa6c6c53dc0",
      name: "Verksted",
      address: "Tempevegen 11",
    },
    data: {
      brand: "Tesla",
      model: "Model S",
      variant: "60",
      modelYear: 2014,
    },
    keys: [
      {
        id: "key-1",
        responsible: {
          id: "53ce23e3-0a5a-4331-95d2-c2ea4d2946ad",
          name: "Ken-Roger Amundsen",
        },
        updatedAt: "2022-06-09T10:45:00.000Z",
      },
      {
        id: "key-2",
        responsible: {
          id: "a50cb76a-c40f-4cc4-855b-ac2b1ed976cc",
          name: "Steve Holt",
        },
        updatedAt: "2022-06-09T08:45:00.000Z",
      },
    ],
    tasks: [
      {
        id: "1271a50a-7a75-4e55-b314-2652df72f959",
        identifier: "Test",
        description: "RepairShop.Task.AssessmentOrderTask.Started",
        dueDate: null,
        responsibleSalesPerson: {
          id: "a50cb76a-c40f-4cc4-855b-ac2b1ed976cc",
          name: "Steve Holt",
        },
      },
      {
        id: "b2578771-8c74-45ad-b319-2d3d60b67f29",
        identifier: "Mottakskontroll",
        description: "Receival.Task.ReceivalInspection.Started",
        dueDate: null,
        responsibleSalesPerson: {
          id: "a50cb76a-c40f-4cc4-855b-ac2b1ed976cc",
          name: "Steve Holt",
        },
      },
    ],
    responsibleSalesPerson: {
      id: "a50cb76a-c40f-4cc4-855b-ac2b1ed976cc",
      name: "Steve Holt",
    },
  },
  {
    id: "1746646e-474c-4e9c-afad-99cf0f97d2c0",
    registrationNumber: "DJ70559",
    data: {
      brand: "BMW",
      model: "3-Serie",
      variant: "318i",
      modelYear: 1999,
    },
    image:
      "https://www.hagerty.co.uk/wp-content/uploads/2021/03/1998-bmw-3-series-603a6884a1130.jpg",
    location: {
      id: "aaed9506-10fd-4a22-b02c-eaa6c6c53dc0",
      name: "Parkering B",
      address: "Tempevegen 11",
    },
    keys: [
      {
        id: "key-1",
        location: {
          id: "skap-b29",
          name: "Skap A11",
        },
        updatedAt: "2022-06-09T10:45:00.000Z",
      },
      {
        id: "key-2",
        location: {
          id: "skap-b29",
          name: "Skap A12",
        },
        updatedAt: "2022-06-09T08:45:00.000Z",
      },
    ],
    tasks: [
      {
        id: "e19ae03a-2b00-4e43-9277-4d1afd7bca7d",
        identifier: "Godkjenn innkjøp",
        description: "Purchase.Task.PurchaseApprove.Started.ApprovePurchase",
        dueDate: "2023-06-08T13:02:47.230191Z",
        responsibleSalesPerson: {
          id: "53ce23e3-0a5a-4331-95d2-c2ea4d2946ad",
          name: "Ken-Roger Amundsen",
        },
      },
    ],
    responsibleSalesPerson: {
      id: "53ce23e3-0a5a-4331-95d2-c2ea4d2946ad",
      name: "Ken-Roger Amundsen",
    },
  },
];
