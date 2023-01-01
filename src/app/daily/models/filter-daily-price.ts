export class FilterDailyPrice  {

  a: number ;

  constructor(json: any = null) {
    this.a = json && json['insCode'];
  }

  static fromJson(json: any) {
    return new FilterDailyPrice(json);
  }
}
