import { createAction } from "typesafe-actions";

export const update = createAction("UPDATE_MARKET_DATA", resolve => {
  return () => resolve();
});
