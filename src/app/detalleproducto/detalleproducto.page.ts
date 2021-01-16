import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  respuesta: any;
  item: any;
  constructor(public navParams: NavParams,
              public http: HttpClient,
              public modalController: ModalController,
              public alertController: AlertController) {
this.item = navParams.get('dato');
   }

  ngOnInit() {
  }

  actualizarProducto(item) {
    const uri = 'https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=editar&id&nombre' + item.nombre
    + '&descripcion=' + item.descripcion
    + '&preciodecosto=' + item.preciodecosto +
    '&preciodeventa=' + item.preciodeventa +
    '&cantidad=' + item.cantidad +
    '&fotografia=' + item.fotografia +
    '&id=' + item.id;
    this.http.get(uri).subscribe(async data => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      if (!!mensaje) {
      {
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Actualizar',
          message: mensaje,
          buttons: ['OK']
        });
        await alert.present();
        this.modalController.dismiss();
      }
    }

  });
  }

  eliminarProducto(id) {
    const uri = 'https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=eliminar$id' + id;
    this.http.get(uri).subscribe(async data => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      if (!!mensaje) {
      {
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Eliminar',
          message: mensaje,
          buttons: ['OK']
        });
        await alert.present();
        this.modalController.dismiss();
      }
    }

  });
  }

  regresar() {
    this.modalController.dismiss();
    }
}

