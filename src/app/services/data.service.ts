import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

// base URL for the data files
const BASE_URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/';
const TIME_SERIES = 'csse_covid_19_time_series';
const FILE_NAME = 'time_series_covid19_';

export enum DATA_SET {
  CONFIRMED = 'confirmed_global',
  RECOVERED = 'recovered_global',
  DEATHS = 'deaths_global'
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
  public dataSets = [DATA_SET.CONFIRMED, DATA_SET.RECOVERED, DATA_SET.DEATHS];

  private data: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public data$: Observable<any[]> = this.data.asObservable();

  constructor() { }

  /**
   * Retrieves data from specific file, based on the index passed.
   */
  public getDataSet(index: number, loadFromCache: boolean): Observable<any> {
    const dataSet = this.dataSets[index];
    let data$: Observable<any>;

    if (loadFromCache) {
      data$ = Observable.create(observer => {
        const data = window.localStorage.getItem(`${FILE_NAME}${dataSet}`);
        observer.next(data);
        observer.complete();
      });
    } else {
      data$ = Observable.create(observer => {
        // tslint:disable-next-line: max-line-length
        fetch(`${BASE_URL}/${TIME_SERIES}/${FILE_NAME}${dataSet}.csv`)
          .then(response => {
            return response.text();
          })
          .then(data => {
            window.localStorage.setItem(`${FILE_NAME}${dataSet}`, data);
            observer.next(data);
            observer.complete();
          })
          .catch(err => {
            observer.error('Using offline data; ' + err);
          });
      });
    }

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
      const headers = csvLines[0].split(',');
      const locations = [];
      let data = [];
      let maxValue = 1;
      let totalNumber = 0;

      for (let i = 1; i < csvLines.length; i++) {
          const columns = csvLines[i].split(',');
          let totalForCountry = parseInt(columns[columns.length - 1], 10);
          totalForCountry = isNaN(totalForCountry) ? 0 : totalForCountry;
          totalNumber += totalForCountry;
          if (totalForCountry > maxValue) {
            maxValue = totalForCountry;
          }
          let dataItem = {};

          // only take values for countries with more than 0 cases
          if (totalForCountry) {
            const region = columns[0];
            const country = columns[1];
            const lat = parseInt(columns[2], 10);
            const lon = parseInt(columns[3], 10);
            dataItem = { region, country, lat, lon, value: totalForCountry };

            // 4th column till end are corresponding dates, starting from 22.01.2020
            for (let j = 4; j < headers.length; j++) {
              const header = headers[j].trim();
              let val = columns[j] as any;

              if (j >= 2) {
                val = parseInt(columns[j], 10);
              }

              dataItem[header] = val;
            }



            locations.push(dataItem);
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
