import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// base URL for the data files
const BASE_URL = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series';
const TIME_SERIES = 'csse_covid_19_time_series';
const EMPTY_STRING = '';

export enum DATA_SET {
    CONFIRMED = 'Confirmed',
    RECOVERED = 'Recovered',
    DEATHS = 'Deaths'
}

@Injectable()
export class RemoteDataService {
    public dataSets = ['Confirmed', 'Recovered', 'Deaths'];
    constructor() {}

    /**
     * Retrieves data from specific file, based on the index passed.
     */
    public getDataSet(index: number): Observable<any> {
        const baseDataPath = '../../assets/Data/time_series_19-covid-';
        const dataSet = this.dataSets[index];
        const data$ = Observable.create(observer => {
            fetch(`${baseDataPath}${dataSet}.csv`)
              .then(response => response.text()) // or text() or blob() etc.
              .then(data => {
                observer.next(data);
                observer.complete();
              })
              .catch(err => observer.error(err));
          });

        return data$;
    }
}
