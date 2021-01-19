import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';
import { DemoModule } from './demo/demo.module';
import { HomeModule } from './home/home.module';
import { DashboadComponent } from './layout/dashboad/dashboad.component';
import { OrderModule } from './order/order.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {path: '', component: DashboadComponent,
   children: [
    {path: '' , 
        redirectTo: 'home', 
        pathMatch: 'full' },
    {
      path: 'home',
      loadChildren : () => import('./home/home.module').then(m => HomeModule) },
    {
      path: 'products',
      loadChildren : () => import('./product/product.module').then(m => ProductModule) },
    {
      path: 'contact',
      loadChildren : () => import('./contact/contact.module').then(m => ContactModule),
    },
    {
      path: 'order',
      loadChildren : () => import('./order/order.module').then(m => OrderModule),
    }
  ]
  },
  {
    path: 'demo', 
    loadChildren: () => import ('./demo/demo.module').then(m => DemoModule),
  },
  {
    path:'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import ('./admin/admin.module').then(m => AdminModule) 
  },
  {
    path:'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => AuthModule)
  },
  {
    path: '**' ,
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
