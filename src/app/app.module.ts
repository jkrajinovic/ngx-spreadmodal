import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSpreadmodalComponent } from './../../projects/ngx-spreadmodal/src/lib/ngx-spreadmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxSpreadmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
