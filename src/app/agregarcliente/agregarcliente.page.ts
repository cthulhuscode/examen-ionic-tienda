import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-agregarcliente",
  templateUrl: "./agregarcliente.page.html",
  styleUrls: ["./agregarcliente.page.scss"],
})
export class AgregarclientePage implements OnInit {
  // id:number;
  nombre: string;
  direccion: string;
  telefono: number;
  correo: string;

  url = "";
  respuesta: any;

  constructor(
    public http: HttpClient,
    public modalController: ModalController
  ) {}
  guardarCliente() {
    // const uri = 'https://bdpromo1.000webhostapp.com/api.php?comando=agregar&nombre=' + this.nombre
    // + '&descripcion=' + this.descripcion
    // + '&preciodecosto=' + this.preciodecosto +
    // '&preciodeventa=' + this.preciodeventa +
    // '&cantidad=' + this.cantidad +
    // '&fotografia=' + this.url;

    const uri =
      "https://appinventor2020.000webhostapp.com/tienda_api/clientes.php?comando=agregar&idDueno=1&nombre=" +
      this.nombre +
      "&direccion=" +
      this.direccion +
      "&telefono=" +
      this.telefono +
      "&correo=" +
      this.correo;

    this.http.get(uri).subscribe((data) => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
    });
  }

  cancelar() {
    this.modalController.dismiss();
  }

  ngOnInit() {}
}
