import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  /*{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },*/
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'crudproductos',
    loadChildren: () => import('./crudproductos/crudproductos.module').then( m => m.CRUDproductosPageModule)
  },
  {
    path: 'agregarproducto',
    loadChildren: () => import('./agregarproducto/agregarproducto.module').then( m => m.AgregarproductoPageModule)
  },
  
  {
    path: 'detalleproducto',
    loadChildren: () => import('./detalleproducto/detalleproducto.module').then( m => m.DetalleproductoPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'agregarcliente',
    loadChildren: () => import('./agregarcliente/agregarcliente.module').then( m => m.AgregarclientePageModule)
  },
  {
    path: 'detallecliente',
    loadChildren: () => import('./detallecliente/detallecliente.module').then( m => m.DetalleclientePageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'ventas',
    loadChildren: () => import('./ventas/ventas.module').then( m => m.VentasPageModule)
  },
  {
    path: 'agregar-venta',
    loadChildren: () => import('./agregar-venta/agregar-venta.module').then( m => m.AgregarVentaPageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
