import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CRUDProductosPageRoutingModule } from './crudproductos-routing.module';

import { CRUDProductosPage } from './crudproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CRUDProductosPageRoutingModule
  ],
  declarations: [CRUDProductosPage]
})
export class CRUDProductosPageModule {}
