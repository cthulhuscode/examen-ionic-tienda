import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { AgregarproductoPage } from '../agregarproducto/agregarproducto.page';
import { DetalleproductoPage } from '../detalleproducto/detalleproducto.page';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'crudproductos.page.html',
  styleUrls: ['crudproductos.page.scss'],
})
export class CRUDproductosPage {
backButtonSubscription;
registros: any;
listado: [];
total = 0;
  constructor(public http: HttpClient, public modalController: ModalController,
              ) {
    this.cargarProductos();
  }
  cargarProductos() {
    const uri = 'https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=listar&idDueno=1';
    this.http.get(uri).subscribe(data => {
      const datos = data;
     // alert('Entro!!');
      this.registros = datos;
      this.listado = this.registros.records;
      this.total = this.listado.length;
  });
  }
  
 searchByName()
 {
    const uri='https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=buscar&nombre=cho&idDueno=1';

    this.http.get(uri).subscribe(data => {
      const res: any = data;
      this.listado = res.listado;
    })

  }
  
 
  async editarProducto(item) {
    const modal = await this.modalController.create({
      component: DetalleproductoPage,
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
      component: AgregarproductoPage
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
