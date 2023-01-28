import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderFormComponent } from './order-form/order-form.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';







@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OrderPageComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    ItemCardComponent,
    NotFoundComponent,
    AddItemComponent,
    ItemListComponent,
    OrderFormComponent,
    ItemDetailComponent,
 
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatRippleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
