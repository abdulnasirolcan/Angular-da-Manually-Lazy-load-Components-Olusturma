import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiddleMainPartModule } from './components/middle-main-part/middle-main-part.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MiddleMainPartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
