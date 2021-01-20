import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  backButtonSubscription;

  usuario: string;
  contrasena: string;
  correo:string;
  nombreTienda:string;

  url = '';
  respuesta: any;

  constructor(private router: Router,
              public http: HttpClient,
              public modalController: ModalController) { }

  
  guardarUsuario() {
    // const uri = 'https://bdpromo1.000webhostapp.com/api.php?comando=agregar&nombre=' + this.nombre 
    // + '&descripcion=' + this.descripcion
    // + '&preciodecosto=' + this.preciodecosto +
    // '&preciodeventa=' + this.preciodeventa +
    // '&cantidad=' + this.cantidad +
    // '&fotografia=' + this.url;

    const uri = 'https://appinventor2020.000webhostapp.com/tienda_api/duenos.php?comando=agregar&usuario='
    +this.usuario+'&contrasena='
    +this.contrasena+'&correo='
    +this.correo+'&tienda='+this.nombreTienda;

    this.http.get(uri).subscribe(data => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      if (!!mensaje) {
      {
    this.modalController.dismiss();
      }
    }

  });
  }

  ngOnInit() {
  }

}
