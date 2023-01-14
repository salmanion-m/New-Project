export class FilterDailyPrices {
  insCode: number ;
  FromDate: number;
  ToDate: number;

  constructor(json: any = null) {
    this.insCode = json && json['insCode'];
    this.FromDate = json && json['FromDate'];
    this.ToDate = json && json['ToDate'];
  }

  static fromJson(json: any) {
    return new FilterDailyPrices(json);
  }
}
