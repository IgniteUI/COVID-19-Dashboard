import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

export default [
  provideZonelessChangeDetection(),
  provideAnimations()
];
