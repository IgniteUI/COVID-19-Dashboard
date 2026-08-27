import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DatePipe, NgOptimizedImage]
})
export class FooterComponent {
  readonly lastUpdate = input<Date | null>(null);
  protected readonly lastUpdateIso = computed(() => this.lastUpdate()?.toISOString() ?? null);
}
