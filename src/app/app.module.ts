import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FundModule} from "./fund/fund.module";
import {FormsModule} from "@angular/forms";
import {MatSortModule} from "@angular/material/sort";
import {IndustryModule} from "./industry/industry.module";
import {LetterTypeModule} from "./letter-type/letter-type.module";
import {InstrumentModule} from "./instrument/instrument.module";
import {DailyModule} from "./daily/daily.module";
import {AuthModule} from "./auth/auth.module";
import {AuthService} from "./auth";
import {AuthInterceptor} from "./share";
import {ShareModule} from "./share/share.module";
import {DashbordModule} from "./dashbord/dashbord.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
    FundModule,
    IndustryModule,
    LetterTypeModule,
    InstrumentModule,
    DailyModule,
    MatSortModule,
    AuthModule,
    ShareModule,
    DashbordModule
  ],
  schemas: [ NO_ERRORS_SCHEMA  ],
  providers: [AuthService,
    {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
