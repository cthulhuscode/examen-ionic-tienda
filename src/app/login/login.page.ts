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
  records: [];
  id: number = -1;
  usuario: string = "enri";
  contrasena: string = "enri";

  constructor(public loginCtrl: ModalController, public alertController: AlertController, public navCtrl: NavController, private router: Router, public http: HttpClient) { }

  ngOnInit() {
  }

  login() {  
    this.navCtrl.navigateForward("/home")
  
    /*
    const uri = `https://appinventor2020.000webhostapp.com/tienda_api/duenos.php?comando=login&usuario="${this.usuario}"&contrasena="${this.contrasena}"`;
     this.http.get(uri).subscribe(data => {
      const res: any = data;
      this.records = res.records;
      for(let record in this.records){
        this.id = record["id"]
      }
    })

    if (this.id > 1) {
      this.navCtrl.navigateForward("/home")
    } else {
      this.respuesta = 'Datos inválidos'
    }
    */
  }

 

  async registrarse(){
     this.navCtrl.navigateForward('/registrarse');
  }
}

