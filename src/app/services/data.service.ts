import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

// base URL for the data files
const BASE_URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data';
const COMMITS_URL = 'https://api.github.com/repos/CSSEGISandData/COVID-19/commits';
const TIME_SERIES = 'csse_covid_19_time_series';
const FILE_NAME = 'time_series_covid19_';
const LAST_UPDATE_KEY = 'lastUpdate';

export enum DATA_SET {
  CONFIRMED = 'confirmed_global',
  DEATHS = 'deaths_global'
}

export interface IRegionData {
  value: number;
  lat: number;
  lon: number;
  region: string;
  country: string;
}

export interface IWorldData {
  data: IRegionData[];
  peakValue: number;
  totalCases: number;
}

export interface ICasesData {
  totalConfirmed: IWorldData;
  totalDeaths: IWorldData;
}

interface IGitHubCommit {
  commit: { author: { date: string } };
}

@Injectable({ providedIn: 'root' })
export class RemoteDataService {
  public readonly dataSets = [DATA_SET.CONFIRMED, DATA_SET.DEATHS];

  /**
   * Retrieves data from the global timely report file, based on the index passed.
   * 0 goes for the Confirmed report, 1 for Deaths.
   */
  public getDataSet(index: number, lastCommit?: number): Observable<string> {
    return from(this.fetchDataSet(index, lastCommit));
  }

  /**
   * Retrieves the time the data source files were last updated, in milliseconds.
   */
  public getLatestCommits(): Observable<number> {
    return from(this.fetchLatestCommit());
  }

  /**
   * Converts csv file data to JSON, calculates the highest value per region and
   * the total value for all regions. Returns an `IWorldData` object.
   */
  public csvToJson(csvData: string): IWorldData {
    const csvLines = csvData
      .replace(/, /g, ' - ')
      .replace(/"/g, '')
      .split('\n');

    const locations: IRegionData[] = [];
    let totalCases = 0;
    let peakValue = 0;

    for (let i = 1; i < csvLines.length; i++) {
      const columns = csvLines[i].split(',');
      const value = parseInt(columns[columns.length - 1], 10);

      if (value > 0) {
        const region = columns[0];
        const country = columns[1];
        // NOTE: kept as `parseInt` to match the previously deployed behaviour -
        // it truncates the decimals of the JHU coordinates.
        const lat = parseInt(columns[2], 10);
        const lon = parseInt(columns[3], 10);

        totalCases += value;
        locations.push({ region, country, lat, lon, value });

        if (value > peakValue) {
          peakValue = value;
        }
      }
    }

    const data = locations.sort((a, b) => b.value - a.value);

    return { data, peakValue, totalCases };
  }

  private async fetchLatestCommit(): Promise<number> {
    const response = await fetch(COMMITS_URL);
    const commits = await response.json() as IGitHubCommit[];

    return new Date(commits[0].commit.author.date).getTime();
  }

  private async fetchDataSet(index: number, lastCommit?: number): Promise<string> {
    const dataSet = this.dataSets[index];
    const cacheKey = `${FILE_NAME}${dataSet}`;
    const lastUpdate = parseInt(window.localStorage.getItem(LAST_UPDATE_KEY) ?? '', 10);

    if (lastUpdate && lastCommit && lastUpdate >= lastCommit) {
      const cached = window.localStorage.getItem(cacheKey);
      if (cached) {
        return cached;
      }
    }

    try {
      const response = await fetch(`${BASE_URL}/${TIME_SERIES}/${cacheKey}.csv`);
      const data = await response.text();

      window.localStorage.setItem(cacheKey, data);
      window.localStorage.setItem(LAST_UPDATE_KEY, String(new Date().getTime()));

      return data;
    } catch {
      return this.loadOfflineData(index);
    }
  }

  private async loadOfflineData(index: number): Promise<string> {
    const response = await fetch(`assets/${TIME_SERIES}/${FILE_NAME}${this.dataSets[index]}.csv`);

    return response.text();
  }
}
