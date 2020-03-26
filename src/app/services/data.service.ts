import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

// base URL for the data files
const BASE_URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data';
const TIME_SERIES = 'csse_covid_19_time_series';
const DAILY_SERIES = 'csse_covid_19_daily_reports';
const FILE_NAME = 'time_series_covid19_';

export enum DATA_SET {
  CONFIRMED = 'confirmed_global',
  RECOVERED = 'recovered_global',
  DEATHS = 'deaths_global'
}

export interface IRegionData {
  value?: number;
  lat: number;
  lon: number;
  region: string;
  country: string;
  increase?: number;
}

export interface IWorldData {
  data: IRegionData[];
  maxNumber; number;
  totalNumber: number;
}

@Injectable()
export class RemoteDataService {
  public dataSets = [DATA_SET.CONFIRMED, DATA_SET.RECOVERED, DATA_SET.DEATHS];

  private data: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public data$: Observable<any[]> = this.data.asObservable();

  constructor() { }

  /**
   * Retrieves data from global timely report file, based on the index passed.
   * 0 goes for Confirmed report, 1 for Recovered, 2 for Deaths
   */
  public getDataSet(index: number, loadFromCache: boolean): Observable<any> {
    const baseDataPath = 'assets/';
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
        fetch(`${BASE_URL}/${DAILY_SERIES}/${FILE_NAME}${dataSet}.csv`)
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

  /**
   * Retrieves data from daily report files, based on the index passed.
   */
  public getDataSetFromDailyReport(loadFromCache: boolean): Observable<any> {
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    let todayFileName = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: 'numeric' }).format(yesterday);
    todayFileName = todayFileName.split('/').join('-');
    let data$: Observable<any>;

    if (loadFromCache) {
        data$ = Observable.create(observer => {
        const data = window.localStorage.getItem(`${todayFileName}`);
        observer.next(data);
        observer.complete();
      });
    } else {
      data$ = Observable.create(observer => {
        // tslint:disable-next-line: max-line-length
        fetch(`${BASE_URL}/${DAILY_SERIES}/${todayFileName}.csv`)
          .then(response => {
            return response.text();
          })
          .then(data => {
            window.localStorage.setItem(`${todayFileName}`, data);
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

  public csvToJson(csvData: string): IWorldData {
      csvData = csvData.replace(/, /g, ' - ');
      csvData = csvData.replace(/"/g, '');
      const csvLines = csvData.split('\n');
      const headers = csvLines[0].split(',');
      const locations = [];
      let data = [];
      let totalNumber = 0;
      let maxValue = 0;

      for (let i = 1; i < csvLines.length; i++) {
          const columns = csvLines[i].split(',');
          let dataItem = {} as IRegionData;

          const value = parseInt(columns[columns.length - 1], 10);

          if (value > 0) {
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
      // const result = locations.reduce((prev, item) => {
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
        return b.totalConfirmed - a.totalConfirmed;
      });

      return { data, maxValue, totalNumber };
  }
}
