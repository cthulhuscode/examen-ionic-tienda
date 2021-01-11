import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string;
  contrasena: string;

  constructor(public loginCtrl: ModalController, public alertController: AlertController ) { }

  ngOnInit() {
  }

  async entrar() {
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
}

