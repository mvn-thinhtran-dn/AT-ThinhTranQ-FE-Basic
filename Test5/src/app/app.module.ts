import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Table1Component } from './table1/table1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';
import { Table4Component } from './table4/table4.component';
@NgModule({
  declarations: [
    AppComponent,
    Table1Component,
    Table2Component,
    Table3Component,
    Table4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
