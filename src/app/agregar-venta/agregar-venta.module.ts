import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarVentaPageRoutingModule } from './agregar-venta-routing.module';

import { AgregarVentaPage } from './agregar-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarVentaPageRoutingModule
  ],
  declarations: [AgregarVentaPage]
})
export class AgregarVentaPageModule {}
