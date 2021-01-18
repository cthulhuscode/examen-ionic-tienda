import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;
  constructor(public navCtrl: NavController, private platform: Platform) {
  }

  ngOnInit() { }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  cerrarSesion(){    
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });    
    this.navCtrl.navigateBack("/login");
  }
  irProductos()
  {
    this.navCtrl.navigateForward('/crudproductos');
  }

  irClientes(){
     this.navCtrl.navigateForward('/clientes');
  }

  irVentas(){
    this.navCtrl.navigateForward('/ventas');
  }

  irAgregarVenta(){
    this.navCtrl.navigateForward('/agregar-venta');
  }
}
