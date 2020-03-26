import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

// base URL for the data files
const BASE_URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data';
const TIME_SERIES = 'csse_covid_19_time_series';
const FILE_NAME = 'time_series_covid19_';
const DAILY_SERIES = 'csse_covid_19_daily_reports';

export enum DATA_SET {
  CONFIRMED = 'confirmed_global',
  RECOVERED = 'recovered_global',
  DEATHS = 'deaths_global'
}

export interface IRegionData {
  totalConfirmed: number;
  totalRecovered: number;
  totalDeaths: number;
  lat: number;
  lon: number;
  region: string;
  country: string;
  increase?: number;
}

export interface IWorldData {
  data: IRegionData[];
  totalWorldConfirmed: number;
  totalWorldRecovered: number;
  totalWorldDeaths: number;
  maxConfirmed: number;
  maxRecovered: number;
  maxDeaths: number;
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
  public getDataSet(loadFromCache: boolean): Observable<any> {
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
      const locations = [];
      let data = [];
      let maxConfirmed = 1;
      let maxRecovered = 0;
      let maxDeaths = 0;
      let totalWorldConfirmed = 0;
      let totalWorldRecovered = 0;
      let totalWorldDeaths = 0;

      for (let i = 1; i < csvLines.length; i++) {
          const columns = csvLines[i].split(',');
          let totalConfirmed = parseInt(columns[7], 10);
          totalConfirmed = isNaN(totalConfirmed) ? 0 : totalConfirmed;
          let dataItem = {} as IRegionData;

          // only take values for countries with more than 0 cases
          if (totalConfirmed && columns[3] !== 'US') {
            totalWorldConfirmed += totalConfirmed;
            if (totalConfirmed > maxConfirmed) {
              maxConfirmed = totalConfirmed;
            }

            let totalRecovered = parseInt(columns[9], 10);
            totalRecovered = isNaN(totalRecovered) ? 0 : totalRecovered;
            totalWorldRecovered += totalRecovered;
            if (totalRecovered > maxRecovered) {
              maxRecovered = totalRecovered;
            }

            let totalDeaths = parseInt(columns[8], 10);
            totalDeaths = isNaN(totalDeaths) ? 0 : totalDeaths;
            totalWorldDeaths += totalDeaths;
            if (totalDeaths > maxDeaths) {
              maxDeaths = totalDeaths;
            }

            const region = columns[2];
            const country = columns[3];
            const lat = parseFloat(columns[5]);
            const lon = parseFloat(columns[6]);
            dataItem = { region, country, lat, lon, totalConfirmed, totalRecovered, totalDeaths };

            locations.push(dataItem);
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

      return { data, totalWorldConfirmed, totalWorldRecovered, totalWorldDeaths, maxConfirmed, maxRecovered, maxDeaths };
  }
}
