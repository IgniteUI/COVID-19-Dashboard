import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, input, output, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { forkJoin } from 'rxjs';

import { ListCasesComponent } from '../list-cases/list-cases.component';
import { MapCasesComponent } from '../map-cases/map-cases.component';
import { ICasesData, IRegionData, RemoteDataService } from '../services/data.service';
import { TimelineChartComponent } from '../timeline-chart/timeline-chart.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    host: { class: 'app__main' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ListCasesComponent, MapCasesComponent, TimelineChartComponent]
})
export class MainComponent {

  readonly darkTheme = input(true);

  readonly messageEvent = output<string>();
  readonly updateTimeRetrieved = output<number>();

  protected readonly worldData = signal<ICasesData | null>(null);
  protected readonly confirmedCsv = signal('');

  protected readonly confirmedCases = computed(() => this.worldData()?.totalConfirmed ?? null);
  protected readonly deaths = computed(() => this.worldData()?.totalDeaths ?? null);

  private readonly map = viewChild.required(MapCasesComponent);
  private readonly dataService = inject(RemoteDataService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.dataService.getLatestCommits()
      .pipe(takeUntilDestroyed())
      .subscribe(lastCommit => {
        this.updateTimeRetrieved.emit(lastCommit);
        this.loadDataSets(lastCommit);
      });
  }

  protected onRegionSelected(region: IRegionData): void {
    this.map().zoomMapToLoc(region.lat, region.lon);
  }

  /**
   * Fetches the corresponding Confirmed and Deaths cases data.
   */
  private loadDataSets(lastCommit: number): void {
    forkJoin([
      this.dataService.getDataSet(0, lastCommit),
      this.dataService.getDataSet(1, lastCommit)
    ])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([confirmedCsv, deathsCsv]) => {
        this.confirmedCsv.set(confirmedCsv);
        this.worldData.set({
          totalConfirmed: this.dataService.csvToJson(confirmedCsv),
          totalDeaths: this.dataService.csvToJson(deathsCsv)
        });

        // Hide the splash screen once the data is loaded.
        this.messageEvent.emit('splash-screen--hidden');
      });
  }
}
