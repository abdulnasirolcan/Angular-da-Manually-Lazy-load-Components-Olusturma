import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetLeftLazyComponent } from './widget-left-lazy.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [WidgetLeftLazyComponent],
  entryComponents: [WidgetLeftLazyComponent]
})

export class WidgetLeftLazyModule {
  static entry = WidgetLeftLazyComponent;
}
