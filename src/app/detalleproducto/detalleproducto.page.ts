import { Component, OnInit } from "@angular/core";
import { NavParams } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { ModalController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { NavController, Platform } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-detalleproducto",
  templateUrl: "./detalleproducto.page.html",
  styleUrls: ["./detalleproducto.page.scss"],
})
export class DetalleproductoPage implements OnInit {
  respuesta: any;
  item: any;
  usuario: any;

  constructor(
    public http: HttpClient,
    public modalController: ModalController,
    public alertController: AlertController,
    public navCtrl: NavController,
    private router: Router
  ) {
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
    this.item = this.router.getCurrentNavigation().extras.state.producto;
  }

  ngOnInit() {}

  comprarProducto(producto) {
    this.navCtrl.navigateForward("/agregar-venta", {
      state: { usuario: this.usuario, producto },
    });
  }

  actualizarProducto(item) {
    const uri =
      "https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=editar&id=" +
      item.id +
      "&nombre=" +
      item.nombre +
      "&descripcion=" +
      item.descripcion +
      "&preciodecosto=" +
      item.preciodecosto +
      "&preciodeventa=" +
      item.preciodeventa +
      "&cantidad=" +
      item.cantidad +
      "&fotografia=" +
      item.fotografia;

    this.http.get(uri).subscribe(async (data) => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      if (!!mensaje) {
        {
          const alert = await this.alertController.create({
            header: "Alerta",
            subHeader: "Actualizar",
            message: mensaje,
            buttons: ["OK"],
          });
          await alert.present();
          this.modalController.dismiss();
        }
      }
    });
  }

  eliminarProducto(id) {
    const uri =
      "https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=eliminar&id=" +
      id;
    this.http.get(uri).subscribe(async (data) => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      if (!!mensaje) {
        {
          const alert = await this.alertController.create({
            header: "Alerta",
            subHeader: "Eliminar",
            message: mensaje,
            buttons: ["OK"],
          });
          await alert.present();
          this.modalController.dismiss();
        }
      }
    });
  }

  regresar() {
    this.navCtrl.navigateBack("/crudproductos");
  }
}
