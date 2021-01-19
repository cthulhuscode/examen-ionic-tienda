import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CRUDproductosPageRoutingModule } from './crudproductos-routing.module';

import { CRUDproductosPage } from './crudproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CRUDproductosPageRoutingModule
  ],
  declarations: [CRUDproductosPage]
})
export class CRUDproductosPageModule {}
