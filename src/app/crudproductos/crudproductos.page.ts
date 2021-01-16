import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { AgregarPage } from '../agregarproducto/agregarproducto.page';
import { DetallePage } from '../detalleproducto/detalleproducto.page';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
backButtonSubscription;
registros: any;
listado: [];
total = 0;
  constructor(public http: HttpClient, public modalController: ModalController,
              ) {
    this.cargarProductos();
  }
  cargarProductos() {
    const uri = 'https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=listar';
    this.http.get(uri).subscribe(data => {
      const datos = data;
     // alert('Entro!!');
      this.registros = datos;
      this.listado = this.registros.records;
      this.total = this.listado.length;
  });
  }
  async editarProducto(item) {
    const modal = await this.modalController.create({
      component: DetallePage,
      componentProps: {dato: item}
    });
    modal.onDidDismiss()
    .then(() => {
      this.cargarProductos();
  });
    return await modal.present();
  }

  async presentarAgregar() {
    const modal = await this.modalController.create({
      component: AgregarPage
    });
    modal.onDidDismiss()
    .then(() => {
      this.cargarProductos();
  });
    return await modal.present();
  }
  salir() {
    navigator['app'].exitApp();
  }
}
