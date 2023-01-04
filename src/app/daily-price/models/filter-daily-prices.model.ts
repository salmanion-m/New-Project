export class FilterDailyPrices {
  a: number ;

  constructor(json: any = null) {
    this.a = json && json['insCode'];
  }

  static fromJson(json: any) {
    return new FilterDailyPrices(json);
  }
}
