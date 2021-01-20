import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  AlertController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-agregar-venta",
  templateUrl: "./agregar-venta.page.html",
  styleUrls: ["./agregar-venta.page.scss"],
})
export class AgregarVentaPage implements OnInit {
  idDueno: number = 1;
  idProducto: number = -1;
  fecha: string = new Date().toLocaleDateString();
  producto: any;
  precioDeCosto: number;
  cantidad: number = 1;
  precioTotal: number = 0;
  respuesta: string;
  usuario: any;

  constructor(
    public http: HttpClient,
    public modalController: ModalController,
    public navCtrl: NavController,
    private router: Router,
    public alertController: AlertController
  ) {
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
    this.producto = this.router.getCurrentNavigation().extras.state.producto;
  }

  ngOnInit() {}

  async addVenta() {
    if (this.cantidad <= 0) {
      const alert = await this.alertController.create({
        header: "Error al vender",
        message: "Ingresa una cantidad mayor a 0.",
        buttons: ["OK"],
      });
      await alert.present();
      return;
    }

    let fecha = this.formatDate(this.fecha);
    let ganancia =
      this.precioTotal - this.producto.preciodecosto * this.cantidad;

    const uri = `https://appinventor2020.000webhostapp.com/tienda_api/ventas.php?comando=agregar&
    idDueno=${this.usuario.id}&
    idProducto=${this.producto.id}&
    cantidad=${this.cantidad}&
    precioTotal=${this.precioTotal}&
    ganancia=${ganancia}&
    fecha=${fecha}`;

    this.http.get(uri).subscribe(async (data) => {
      const res: any = data;
      this.respuesta = res.mensaje;

      if (this.respuesta != "") {
        const alert = await this.alertController.create({
          header: "Venta realizada",
          message: "La venta se efectuó con éxito.",
          buttons: ["OK"],
        });
        await alert.present();
        this.navCtrl.navigateBack("/crudproductos");
      } else {
        const alert = await this.alertController.create({
          header: "Error al vender",
          message: "No fue posible realizar la venta.",
          buttons: ["OK"],
        });
        await alert.present();
      }
    });
  }

  cancelar() {
    this.navCtrl.navigateBack("/detalleproducto");
  }

  formatDate(fecha: string): string {
    let dia = fecha.split("/")[0];
    let mes = fecha.split("/")[1];
    let anio = fecha.split("/")[2];

    return dia + "-" + mes + "-" + anio;
  }

  calculatePrecioTotal() {
    if (this.cantidad >= 1)
      this.precioTotal = this.cantidad * this.producto.preciodeventa;
    else this.precioTotal = 0;
  }
}
