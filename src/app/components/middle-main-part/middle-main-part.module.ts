import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiddleMainPartComponent } from './middle-main-part.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    MiddleMainPartComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [MiddleMainPartComponent]
})
export class MiddleMainPartModule { }
