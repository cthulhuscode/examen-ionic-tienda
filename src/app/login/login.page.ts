import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string;
  contrasena: string;
  respuesta:any;

  constructor(public http: HttpClient,
              public loginCtrl: ModalController,
              public alertController: AlertController,
              public modalController: ModalController,
              public navCtrl: NavController) { }

  ngOnInit() {
  }

  async entrar() {
    const uri='https://appinventor2020.000webhostapp.com/tienda_api/duenos.php?comando=login&usuario='
    +this.usuario+'&contrasena='+this.contrasena;

   

    if (this.usuario === 'admin' && this.contrasena === 'admin') {
      this.loginCtrl.dismiss();

      

    } else {
      // Alert
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Inicio de sesión',
        message: 'No se encontró este usuario',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async registrarse(){
     this.navCtrl.navigateForward('/registrarse');
  }
}

