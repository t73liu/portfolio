export default interface IFinancialReport {
  reportDate: Date;
  grossProfit: number;
  totalRevenue: number;
  totalAssets: number | null;
  totalDebt: number | null;
  totalLiabilities: number | null;
}
