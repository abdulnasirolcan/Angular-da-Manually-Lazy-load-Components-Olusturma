import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetRightLazyComponent } from './widget-right-lazy.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [WidgetRightLazyComponent],
  entryComponents: [WidgetRightLazyComponent]
})

export class WidgetRightLazyModule {
  static entry = WidgetRightLazyComponent;
}
