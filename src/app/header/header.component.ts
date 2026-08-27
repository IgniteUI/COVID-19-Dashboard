import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { IgxIconButtonDirective, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxNavbarActionDirective, IgxNavbarComponent } from 'igniteui-angular/navbar';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        IgxNavbarComponent,
        IgxNavbarActionDirective,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxTooltipDirective,
        IgxTooltipTargetDirective,
        NgOptimizedImage
    ]
})
export class HeaderComponent {
  readonly themeChanged = output<void>();

  protected readonly icon = 'palette';
}
