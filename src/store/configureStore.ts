import { symbolData } from "../offline/symbolData";
import { symbolNames } from "../offline/symbolNames";
import { IStoreState } from "./types";

export const initialState: IStoreState = {
  marketData: {
    symbolData,
    isRefreshing: false,
    lastUpdated: new Date()
  },
  supportedSymbols: symbolNames,
  portfolio: [
    {
      ticker: "MSFT",
      amount: 1000,
      buyPrice: 96.11
    },
    {
      ticker: "AMD",
      amount: 1000,
      buyPrice: 10.11
    }
  ],
  watchlist: ["NFLX", "ATVI"]
};
