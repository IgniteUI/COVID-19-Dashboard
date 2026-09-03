import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {
  IgxCardComponent,
  IgxCardContentDirective,
  IgxCardHeaderComponent,
  IgxCardHeaderSubtitleDirective,
  IgxCardHeaderTitleDirective
} from 'igniteui-angular/card';
import { IgxDividerComponent } from 'igniteui-angular/directives';
import {
  IgxEmptyListTemplateDirective,
  IgxListActionDirective,
  IgxListComponent,
  IgxListItemComponent,
  IgxListLineTitleDirective
} from 'igniteui-angular/list';
import { IgxCircularProgressBarComponent } from 'igniteui-angular/progressbar';

import { IRegionData, IWorldData } from '../services/data.service';

@Component({
    selector: 'app-list-cases',
    templateUrl: './list-cases.component.html',
    styleUrl: './list-cases.component.scss',
    host: { class: 'app__list' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCardHeaderSubtitleDirective,
        IgxCardContentDirective,
        IgxDividerComponent,
        IgxListComponent,
        IgxListItemComponent,
        IgxListLineTitleDirective,
        IgxListActionDirective,
        IgxEmptyListTemplateDirective,
        IgxCircularProgressBarComponent,
        DecimalPipe
    ]
})
export class ListCasesComponent {
    readonly type = input.required<string>();
    readonly data = input<IWorldData | null>(null);

    readonly regionSelected = output<IRegionData>();

    protected readonly totalCases = computed(() => this.data()?.totalCases ?? 0);

    protected readonly listSortedData = computed(
        () => [...(this.data()?.data ?? [])].sort((a, b) => b.value - a.value)
    );

    protected selectRegion(item: IRegionData): void {
        this.regionSelected.emit(item);
    }

    protected onRegionKeydown(event: KeyboardEvent, item: IRegionData): void {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.selectRegion(item);
        }
    }

    protected regionLabel(item: IRegionData): string {
        const location = item.region && item.country !== item.region
            ? `${item.region}, ${item.country}`
            : item.country;
        return `Show ${location} on the map: ${item.value} ${this.type().toLowerCase()}`;
    }
}
