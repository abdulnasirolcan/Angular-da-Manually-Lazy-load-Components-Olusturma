import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoaderService } from './lazy-loader.service';
import { LAZY_LOAD_WIDGET } from './injection-tokens';
import { lazyArrayToObject } from './lazy-array-to-object';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LazyLoaderService, { provide: LAZY_LOAD_WIDGET, useFactory: lazyArrayToObject }],
})
export class CoreModule { }