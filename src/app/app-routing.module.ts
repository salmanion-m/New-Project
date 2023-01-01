import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FundTableComponent} from "./fund";
import {IndustryTableComponent} from "./industry/components";
import {LetterTypeTableComponent} from "./letter-type";
import {InstrumentTableComponent} from "./instrument/components";
import {DailyPriceTableComponent} from "./daily";

const routes: Routes = [
  {path: 'fund', loadChildren: () => import('./fund/fund.module').then(m => m.FundModule)},
  // {path: 'fund',component: FundTableComponent},
  {path: 'industry',component: IndustryTableComponent},
  {path: 'letter',component: LetterTypeTableComponent},
  {path: 'inst' ,component: InstrumentTableComponent},
  {path: 'daily' , component: DailyPriceTableComponent},
  {path: 'auth' , loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
