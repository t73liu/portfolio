import { symbolData } from "./offline/symbolData";
import { IRootState } from "./store";

export const initialState: IRootState = {
  marketData: {
    symbolData,
    isRefreshing: false,
    lastUpdated: new Date()
  },
  // supportedSymbols: symbolNames,
  // portfolio: [
  //   {
  //     ticker: "MSFT",
  //     amount: 1000,
  //     buyPrice: 96.11
  //   },
  //   {
  //     ticker: "AMD",
  //     amount: 1000,
  //     buyPrice: 10.11
  //   }
  // ],
  watchlist: ["NFLX", "ATVI"]
};
