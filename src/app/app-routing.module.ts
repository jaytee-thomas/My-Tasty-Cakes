import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';


const routes: Routes = [
  { 
    path: 'landing-page', 
    component: LandingPageComponent 
  },
  /*{ 
    path: 'order-page', 
    component: OrderPageComponent 
  },*/
  { 
    path: 'item-detail/:id', 
    component: ItemDetailComponent 
  },
  {
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }
  
  // ...
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
