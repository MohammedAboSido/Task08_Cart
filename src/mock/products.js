import { generateId } from "../utils/generateId";

export const products = [
  {
    id: generateId(),
    name: "Product 1",
    price: 20,
    description: "Product 1 is good",
  },
  {
    id: generateId(),
    name: "Product 2",
    price: 30,
    description: "Product 2 is very good",
  },
  {
    id: generateId(),
    name: "Product 3",
    price: 60,
    description: "Product 3 is very nice",
  },
];
