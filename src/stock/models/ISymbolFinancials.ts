import IFinancialReport from "./IFinancialReport";

export default interface ISymbolFinancials {
  symbol?: string;
  financials?: IFinancialReport[];
}
