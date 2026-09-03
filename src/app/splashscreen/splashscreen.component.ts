import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-splashscreen',
    templateUrl: './splashscreen.component.html',
    styleUrl: './splashscreen.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgOptimizedImage]
})
export class SplashscreenComponent { }
