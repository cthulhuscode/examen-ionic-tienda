import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CRUDProductosPage } from './crudproductos.page';

const routes: Routes = [
  {
    path: '',
    component: CRUDProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRUDProductosPageRoutingModule {}
