import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularDelegate, ModalController,NavController, } from '@ionic/angular';
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
  listadoBackup: any[] = [];
  listado: any[] = [];
  total = 0;
  usuario: any;

  constructor(private router: Router,
              public http: HttpClient, 
              public modalController: ModalController,
              public navCtrl: NavController,) { 
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
    this.cargarClientes(); 
  }

   cargarClientes() {
    const uri = 'https://appinventor2020.000webhostapp.com/tienda_api/clientes.php?comando=listar&idDueno='+this.usuario.id;
    this.http.get(uri).subscribe(data => {
      const datos = data;
      this.registros = datos;
      this.listadoBackup = this.registros.records
      this.listado = this.listadoBackup;
      this.total = this.listado.length;
    });

   
  }

  searchByName(evt) {
    this.listado = this.listadoBackup;
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.listado = this.listado.filter((currentClient) => {
      if (currentClient["nombre"] && searchTerm) {
        return (
          currentClient["nombre"]
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1
        );
      }
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
   this.navCtrl.navigateForward("/agregarcliente", {
      state: { usuario: this.usuario },
    });
  }

  salir() {
    navigator['app'].exitApp();
  }

  ionViewWillEnter() {
    this.cargarClientes();
  }

  ngOnInit() {
  }

}