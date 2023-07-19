import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromoComponent } from './promo/promo.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'promo/:id', component:PromoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
