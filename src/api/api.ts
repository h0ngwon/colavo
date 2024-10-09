import { IItems } from "../types/types";

export const getItems = async (): Promise<IItems> => {
  const response = await fetch("https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.items;
};