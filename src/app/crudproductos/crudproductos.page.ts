import { HttpClient } from "@angular/common/http";
import { ModalController, NavController } from "@ionic/angular";
import { AgregarproductoPage } from "../agregarproducto/agregarproducto.page";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "crudproductos.page.html",
  styleUrls: ["crudproductos.page.scss"],
})
export class CRUDproductosPage {
  backButtonSubscription;
  registros: any;
  listadoBackup: any[] = [];
  listado: any[] = [];
  total = 0;
  usuario: any;

  constructor(
    public http: HttpClient,
    public modalController: ModalController,
    public navCtrl: NavController,
    private router: Router
  ) {
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
    this.cargarProductos();
  }

  cargarProductos() {
    const uri =
      "https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=listar&idDueno=1";
    this.http.get(uri).subscribe((data) => {
      const datos = data;
      this.registros = datos;
      this.listadoBackup = this.registros.records;
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

    this.listado = this.listado.filter((currentProduct) => {
      if (currentProduct["nombre"] && searchTerm) {
        return (
          currentProduct["nombre"]
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1
        );
      }
    });
  }

  async editarProducto(item) {
    this.navCtrl.navigateForward("/detalleproducto", {
      state: { producto: item, usuario: this.usuario },
    });
  }

  async presentarAgregar() {
    const modal = await this.modalController.create({
      component: AgregarproductoPage,
    });
    modal.onDidDismiss().then(() => {
      this.cargarProductos();
    });
    return await modal.present();
  }
  salir() {
    navigator["app"].exitApp();
  }
}
