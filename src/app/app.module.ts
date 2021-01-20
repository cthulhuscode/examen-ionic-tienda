import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from './login/login.module';
import { ClientesPageModule } from './clientes/clientes.module';
import { DetalleclientePageModule } from './detallecliente/detallecliente.module';
import { AgregarclientePageModule } from './agregarcliente/agregarcliente.module';

import { CRUDproductosPageModule } from './crudproductos/crudproductos.module';
import { DetalleproductoPageModule } from './detalleproducto/detalleproducto.module';
import { AgregarproductoPageModule } from './agregarproducto/agregarproducto.module';
import { RegistrarsePageModule } from './registrarse/registrarse.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, LoginPageModule,ClientesPageModule,DetalleclientePageModule,AgregarclientePageModule,CRUDproductosPageModule,DetalleproductoPageModule,AgregarproductoPageModule,HttpClientModule,RegistrarsePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
  