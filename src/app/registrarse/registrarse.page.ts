import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ModalController, AlertController } from "@ionic/angular";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-registrarse",
  templateUrl: "./registrarse.page.html",
  styleUrls: ["./registrarse.page.scss"],
})
export class RegistrarsePage implements OnInit {
  backButtonSubscription;

  dueno: string;
  contrasena: string;
  correo: string;
  nombreTienda: string;

  url = "";
  respuesta: any;

  constructor(
    public http: HttpClient,
    public modalController: ModalController,
    public navCtrl: NavController,
    public alertController: AlertController
  ) {}

  async guardarDueno() {
    const uri =
      "https://appinventor2020.000webhostapp.com/tienda_api/duenos.php?comando=agregar&usuario=" +
      this.dueno +
      "&contrasena=" +
      this.contrasena +
      "&correo=" +
      this.correo +
      "&tienda=" +
      this.nombreTienda;

    this.navCtrl.navigateForward("/login");

    const alert = await this.alertController.create({
      header: "Usuario añadido",
      message: "El usuario se añadió con éxito. Ahora inicie sesión.",
      buttons: ["OK"],
    });
    await alert.present();

    this.http.get(uri).subscribe((data) => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      console.log(uri);
      // alert('Añadido!')
      if (!!mensaje) {
        {
          this.modalController.dismiss();
        }
      }
    });
  }

  ngOnInit() {}
}
