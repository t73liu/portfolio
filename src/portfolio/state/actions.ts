import { createAction } from "typesafe-actions";

export const addPosition = createAction("POSITION_ADD", resolve => {
  return (ticker: string, amount: number, price: number) => resolve(ticker);
});

export const editPosition = createAction("POSITION_EDIT", resolve => {
  return (id: string, amount: number, price: number) => resolve(id);
});

export const deletePosition = createAction("POSITION_REMOVE", resolve => {
  return (id: string) => resolve(id);
});
