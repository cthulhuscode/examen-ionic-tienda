import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  AlertController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { Router } from "@angular/router";
@Component({
  selector: "app-agregarproducto",
  templateUrl: "./agregarproducto.page.html",
  styleUrls: ["./agregarproducto.page.scss"],
})
export class AgregarproductoPage implements OnInit {
  nombre: string;
  descripcion: string;
  cantidad: number;
  preciodeventa: number;
  preciodecosto: number;
  url = "";
  respuesta: any;
  usuario: any;

  constructor(
    public http: HttpClient,
    private router: Router,
    public modalController: ModalController,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
  }

  guardarProducto() {
    const uri =
      "https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=agregar&idDueno=" +
      this.usuario.id +
      "&nombre=" +
      this.nombre +
      "&descripcion=" +
      this.descripcion +
      "&preciodecosto=" +
      this.preciodecosto +
      "&preciodeventa=" +
      this.preciodeventa +
      "&cantidad=" +
      this.cantidad +
      "&fotografia=" +
      this.url;

    this.http.get(uri).subscribe(async (data) => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;

      if (mensaje != "") {
        const alert = await this.alertController.create({
          header: "Producto agregado",
          message: "El producto se agregó con éxito.",
          buttons: ["OK"],
        });
        await alert.present();
        this.navCtrl.navigateBack("/crudproductos");
      }
    });
  }

  cancelar() {
    this.navCtrl.navigateBack("/crudproductos");
  }
  ngOnInit() {}
}
