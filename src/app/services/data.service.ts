import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

// base URL for the data files
const BASE_URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/';
const TIME_SERIES = 'csse_covid_19_time_series';
const FILE_NAME = 'time_series_19-covid-';

export enum DATA_SET {
  CONFIRMED = 'Confirmed',
  RECOVERED = 'Recovered',
  DEATHS = 'Deaths'
}

export interface IDataPoint {
  total: number;
  totalChina: number;
  totalOthers: number;
  lat: number;
  lon: number;
  region: string;
  country: string;
  increase: number;
  day: string;
  date: Date;
}

@Injectable()
export class RemoteDataService {
  public dataSets = ['Confirmed', 'Recovered', 'Deaths'];

  private data: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public data$: Observable<any[]> = this.data.asObservable();
  private cachedData: any[] = [];

  constructor() { }

  /**
   * Retrieves data from specific file, based on the index passed.
   */
  public getDataSet(index: number): Observable<any> {
    const baseDataPath = 'assets/';
    const dataSet = this.dataSets[index];

    const data$ = Observable.create(observer => {
      // tslint:disable-next-line: max-line-length
      fetch(`${BASE_URL}/${TIME_SERIES}/${FILE_NAME}${dataSet}.csv`)
        .then(response => {
          return response.text();
        })
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => {
          observer.error('Using offline data; ' + err);
        });
    });

    return data$;
  }

  public getLatestCommits(): Observable<any> {
    const resultData$ = Observable.create(observer => {
      fetch(`https://api.github.com/repos/CSSEGISandData/COVID-19/commits`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
        });
    });

    return resultData$;
  }

  public csvToJson(csvData: string): any {
      csvData = csvData.replace(/, /g, ' - ');
      csvData = csvData.replace(/"/g, '');
      const csvLines = csvData.split('\n');
      // const result = [];
      // const headers = lines[0].split(',');
      // let totalChina = 0;
      // let totalOthers = 0;


      // for (let i = 1; i < lines.length; i++) {
      //   const obj = {} as IDataPoint;
      //   const currentline = lines[i].split(',');

      //   for (let j = 0; j < headers.length; j++) {
      //     const header = headers[j].trim();
      //     let val = currentline[j] as any;

      //     if (j >= 2) {
      //       val = parseInt(currentline[j], 10);
      //     }
      //     if (j === headers.length - 1) {
      //       if (currentline[1] === 'China') {
      //         totalChina += val;
      //       } else {
      //         totalOthers += val;
      //       }
      //     }

      //     obj[header] = val;
      //     obj['totalChina'] = totalChina;
      //     obj['totalOthers'] = totalOthers;
      //   }
      //   obj.total = obj[headers[headers.length - 1]];
      //   result.push(obj);
      // }

      // return result;

      const locations = [];
      let data = [];
      let maxValue = 1;
      let totalNumber = 0;

      for (let i = 1; i < csvLines.length; i++) {
          const columns = csvLines[i].split(',');
          let dataItem = {};

          const value = parseInt(columns[columns.length - 1], 10);

          if (value) {
              const region = columns[0];
              const country = columns[1];
              const lat = parseInt(columns[2], 10);
              const lon = parseInt(columns[3], 10);
              totalNumber += value;
              dataItem = { region, country, lat, lon, value };
              locations.push(dataItem);
              if (value > maxValue) {
                  maxValue = value;
              }
          }
      }

        // aggregate list based on country
        // const result = listData.reduce((prev, item) => {
        //     const newItem = prev.find((i) => {
        //         return i.country === item.country;
        //     });
        //     if (newItem) {
        //         newItem.value += item.value;
        //     } else {
        //         prev.push(item);
        //     }
        //     return prev;
        // }, []);

      data = locations.sort((a, b) => {
        return b.value - a.value;
      });

      return { data, maxValue, totalNumber };
  }
}