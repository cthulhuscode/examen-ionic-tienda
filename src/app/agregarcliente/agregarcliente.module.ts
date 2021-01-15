import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarclientePageRoutingModule } from './agregarcliente-routing.module';

import { AgregarclientePage } from './agregarcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarclientePageRoutingModule
  ],
  declarations: [AgregarclientePage]
})
export class AgregarclientePageModule {}
