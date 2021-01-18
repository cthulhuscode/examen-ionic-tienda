import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CRUDproductosPage } from './crudproductos.page';


const routes: Routes = [
  {
    path: '',
    component: CRUDproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRUDproductosPageRoutingModule {}
