import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountTypesComponent } from './account-types/account-types.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{ path: '', component: PagesComponent },
                        { path: 'home', component: HomeComponent },
                        { path: 'about', component: AboutComponent },
                        { path: 'account-types', component: AccountTypesComponent },
                        { path: 'products', component: ProductsComponent },
                        { path: 'platforms', component: PlatformsComponent },
                        { path: 'contact', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
