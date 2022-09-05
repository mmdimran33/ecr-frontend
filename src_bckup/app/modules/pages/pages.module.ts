import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccountTypesComponent } from './account-types/account-types.component';
import { ProductsComponent } from './products/products.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AboutComponent,
    AccountTypesComponent,
    ProductsComponent,
    PlatformsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
