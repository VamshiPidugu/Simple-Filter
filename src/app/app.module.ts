import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FilterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
