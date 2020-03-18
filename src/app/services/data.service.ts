import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

// base URL for the data files
const BASE_URL = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data';
const TIME_SERIES = 'csse_covid_19_time_series';
const FILE_NAME = 'time_series_19-covid-';
const EMPTY_STRING = '';

export enum DATA_SET {
  CONFIRMED = 'Confirmed',
  RECOVERED = 'Recovered',
  DEATHS = 'Deaths'
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
    const options: RequestInit = {
      method: 'GET',    // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors',  // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    };
    const data$ = Observable.create(observer => {
      // tslint:disable-next-line: max-line-length
      fetch(`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-${dataSet}.csv`)
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
}
