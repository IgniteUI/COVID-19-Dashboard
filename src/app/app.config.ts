import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideIgxDataChartAnnotation,
  provideIgxDataChartCategory,
  provideIgxDataChartInteractivity,
  provideIgxLegend
} from 'igniteui-angular-charts';
import { provideIgxGeographicMap } from 'igniteui-angular-maps';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Ignite UI components animate their overlays/transitions.
    provideAnimations(),

    // Ignite UI charts & maps register their feature types through environment
    // providers. `provideIgxDataChartCategory` pulls in the data chart core,
    // the category X axis, the numeric Y axis and the line series;
    // `provideIgxGeographicMap` pulls in the map core, the proportional symbol
    // series and the size/brush scales.
    provideIgxDataChartCategory(),
    provideIgxDataChartAnnotation(),
    provideIgxDataChartInteractivity(),
    provideIgxLegend(),
    provideIgxGeographicMap()
  ]
};
