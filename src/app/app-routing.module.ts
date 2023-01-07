import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FundTableComponent} from "./fund";
import {IndustryTableComponent} from "./industry/components";
import {LetterTypeTableComponent} from "./letter-type";
import {InstrumentTableComponent} from "./instrument/components";

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'dashbord', loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule)},
  {path: 'day' , loadChildren: ()=> import('./daily-price/daily-price.module').then(m=> m.DailyPriceModule)},
  {path: 'fund', loadChildren: () => import('./fund/fund.module').then(m => m.FundModule)},
  // {path: 'fund',component: FundTableComponent},
  {path: 'industry', loadChildren: () => import('./industry/industry.module').then(m => m.IndustryModule)},
  // {path: 'industry', component: IndustryTableComponent},
  {path: 'letter', loadChildren: () => import('./letter-type/letter-type.module').then(m => m.LetterTypeModule)},
  // {path: 'letter', component: LetterTypeTableComponent},
  {path: 'instrument', loadChildren: () => import('./instrument/instrument.module').then(m => m.InstrumentModule)},
  // {path: 'inst', component: InstrumentTableComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
