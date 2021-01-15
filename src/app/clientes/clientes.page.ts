import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { AgregarclientePage } from '../agregarcliente/agregarcliente.page';
import { DetalleclientePage } from '../detallecliente/detallecliente.page';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
   backButtonSubscription;
registros: any;
listado: [];
total = 0;

  constructor(private router: Router,public http: HttpClient, public modalController: ModalController,) { this.cargarClientes(); }

   cargarClientes() {
    const uri = 'https://appinventor2020.000webhostapp.com/tienda_api/clientes.php?comando=listar&idDueno=1';
    this.http.get(uri).subscribe(data => {
      const datos = data;
     // alert('Entro!!');
      this.registros = datos;
      this.listado = this.registros.records;
      this.total = this.listado.length;
  });
  }

    async editarCliente(item) {
    const modal = await this.modalController.create({
      component: DetalleclientePage,
      componentProps: {dato: item}
    });
    modal.onDidDismiss()
    .then(() => {
      this.cargarClientes();
  });
    return await modal.present();
  }

   async presentarAgregar() {
    const modal = await this.modalController.create({
      component: AgregarclientePage
    });
    modal.onDidDismiss()
    .then(() => {
      this.cargarClientes();
  });
    return await modal.present();
  }
  salir() {
    navigator['app'].exitApp();
  }

  ngOnInit() {
  }

}
