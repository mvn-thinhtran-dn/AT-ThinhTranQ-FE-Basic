import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalerService } from './core/service/localer.service';

import { AppComponent } from './app.component';
import { LimitPipe } from './core/pipe/limit.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LimitPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LocalerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
