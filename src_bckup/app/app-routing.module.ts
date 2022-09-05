import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: 'pages/home', pathMatch: 'full' },   
                        { path: 'pages', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule) }, 
                        { path: 'form', loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule) },
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
