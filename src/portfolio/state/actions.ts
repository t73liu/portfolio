import { createAction } from "typesafe-actions";
import IHolding from "../models/IHolding";

export const addPosition = createAction("POSITION_ADD", resolve => {
  return (ticker: string) => resolve(ticker);
});

export const editPosition = createAction("POSITION_EDIT", resolve => {
  return (position: IHolding) => resolve(position);
});

export const deletePosition = createAction("POSITION_REMOVE", resolve => {
  return (id: string) => resolve(id);
});
