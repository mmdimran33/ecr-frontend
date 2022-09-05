import { AuthGuard } from 'src/app/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountTypesComponent } from './account-types/account-types.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { ProductsComponent } from './products/products.component';
import { UserViewComponent } from './user-view/user-view.component';
import { WithDrawComponent } from './with-draw/with-draw.component';
import { AdminUserLevelComponent } from './admin-user-level/admin-user-level.component';

const routes: Routes = [{ path: '', component: PagesComponent },
                        { path: 'home', component: HomeComponent },
                        { path: 'admin-panel', component: AdminUserLevelComponent },
                       // { path: 'about', component: AboutComponent, canActivate:[AuthGuard]},
                        { path: 'about', component: AboutComponent},
                        { path: 'account-types', component: AccountTypesComponent, canActivate:[AuthGuard] },
                       // { path: 'products', component: ProductsComponent, canActivate:[AuthGuard] },
                        { path: 'products', component: ProductsComponent},
                        { path: 'platforms', component: PlatformsComponent, canActivate:[AuthGuard] },
                        { path: 'contact', component: ContactComponent },
                        { path: 'withdraw', component: WithDrawComponent },
                        { path: 'user-view', component: UserViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
