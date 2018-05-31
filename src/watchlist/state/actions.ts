import { createAction } from "typesafe-actions";

export const addTicker = createAction("TICKER_ADD", resolve => {
  return (ticker: string) => resolve(ticker);
});

export const removeTicker = createAction("TICKER_REMOVE", resolve => {
  return (ticker: string) => resolve(ticker);
});
