import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {
    this.iniciarSesion();
  }

  async iniciarSesion() {
    const modal = await this.modalController.create({
      component: LoginPage
    });
    return await modal.present();
  }  
}
