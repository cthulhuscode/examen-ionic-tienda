import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  respuesta:string = ""
  objetoUsuario: any = null
  usuario: string = "";
  contrasena: string = "";

  constructor(public loginCtrl: ModalController,
              public alertController: AlertController, 
              public navCtrl: NavController, 
              private router: Router, 
              public http: HttpClient) { }

  ngOnInit() {
    this.objetoUsuario = null
    this.usuario = "";
    this.contrasena = "";
    this.objetoUsuario = null;
  }

  login() {    
    const uri = `https://appinventor2020.000webhostapp.com/tienda_api/duenos.php?comando=login&usuario=${this.usuario}&contrasena=${this.contrasena}`;
     this.http.get(uri).subscribe( async data => {
      const res: any =  await data;
      const records = await res.records;
      this.objetoUsuario = await records[0]
    })

    if (this.objetoUsuario != null) {
      this.navCtrl.navigateForward("/home", {state: {usuario: this.objetoUsuario}}) 
      this.usuario = "";
      this.contrasena = "";
      this.respuesta = '';
    } else {
      this.respuesta = 'Datos inválidos'
    }   

    this.objetoUsuario = null;
  }

 

  async registrarse(){
     this.navCtrl.navigateForward('/registrarse');
  }
}

