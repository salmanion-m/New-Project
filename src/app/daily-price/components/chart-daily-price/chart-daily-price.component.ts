import {Component, OnInit, Optional} from '@angular/core';
import { Options} from "highcharts";
import {Chart} from "angular-highcharts";
import { first } from 'rxjs';

@Component({
  selector: 'app-chart-daily-price',
  templateUrl: './chart-daily-price.component.html',
  styleUrls: ['./chart-daily-price.component.scss']
})
export class ChartDailyPriceComponent implements OnInit{

  chart: Chart;
  options: Options;

  ngOnInit() {
    this.init();
  }

  addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }

  addSerie() {
    // @ts-ignore
    this.chart.addSeries({
      name: 'Line ' + Math.floor(Math.random() * 10),
      data: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      ]
    });
  }

  removePoint() {
    // @ts-ignore
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }

  removeSerie() {
    // @ts-ignore
    this.chart.removeSeries(this.chart.ref.series.length - 1);
  }

  init() {
    // @ts-ignore
    this.options = {
      chart: {
        type: 'line80'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        type: 'line',
        data: [1, 2, 3]
      }]
    };
    let chart = new Chart(this.options);
    chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);

    chart.ref$.subscribe(c => console.log(c.options.chart));
  }

  changeType = () => {
    // this.chart.options.chart = {type: 'column'};
    this.chart.ref$.pipe(first()).subscribe(chart => {
      // chart.update({ chart: { type: 'column' } });
      this.updateChart({ chart: { type: 'column' } });
    })
  }

  private updateChart = (options: Options) => {
    // By default if the value of the object property is undefined lodash won't use this but keeps
    // the original after using _.merge(). We can customize the merge with _.mergeWith().
    // If we return undefined inside the customizer function lodash handles the merge like above not keeping the undefined value.
    // With deleting the property we trick lodash and with this the property gets undefined value after the merge.
    const customizer = (_objValue: Optional, srcValue: Optional, key: any, object: any) => {
      if (srcValue === undefined) delete object[key];
    };

    console.log(options.chart, options.plotOptions);
    // @ts-ignore
    const mergedOptions = _.mergeWith(this.options, options, customizer);
    console.log(mergedOptions.chart, mergedOptions.plotOptions);

    this.chart = new Chart(mergedOptions);
  };


}
