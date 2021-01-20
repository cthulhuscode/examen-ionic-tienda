import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  AlertController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-agregarcliente",
  templateUrl: "./agregarcliente.page.html",
  styleUrls: ["./agregarcliente.page.scss"],
})
export class AgregarclientePage implements OnInit {
  // id:number;
  nombre: string;
  direccion: string;
  telefono: number;
  correo: string;
  usuario: any;
  url = "";
  respuesta: any;

  constructor(
    public http: HttpClient,
    public modalController: ModalController,
    public navCtrl: NavController,
    public alertController: AlertController,
    private router: Router
  ) {
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
  }
  async guardarCliente() {
    // const uri = 'https://bdpromo1.000webhostapp.com/api.php?comando=agregar&nombre=' + this.nombre
    // + '&descripcion=' + this.descripcion
    // + '&preciodecosto=' + this.preciodecosto +
    // '&preciodeventa=' + this.preciodeventa +
    // '&cantidad=' + this.cantidad +
    // '&fotografia=' + this.url;

    const uri =
      "https://appinventor2020.000webhostapp.com/tienda_api/clientes.php?comando=agregar&idDueno=" +
      this.usuario.id +
      "&nombre=" +
      this.nombre +
      "&direccion=" +
      this.direccion +
      "&telefono=" +
      this.telefono +
      "&correo=" +
      this.correo;

    this.http.get(uri).subscribe(async (data) => {
      const res: any = data;
      this.respuesta = res.mensaje;

      if (this.respuesta != "") {
        const alert = await this.alertController.create({
          header: "Cliente agregado",
          message: "El cliente se agregó con éxito.",
          buttons: ["OK"],
        });
        await alert.present();
        this.navCtrl.navigateBack("/clientes");
      } else {
        const alert = await this.alertController.create({
          header: "Error al agregar",
          message: "No fue posible agregar al cliente.",
          buttons: ["OK"],
        });
        await alert.present();
      }
    });
  }

  cancelar() {
    this.navCtrl.navigateBack("/clientes");
  }

  ngOnInit() {}
}
