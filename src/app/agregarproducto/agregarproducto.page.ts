import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.page.html',
  styleUrls: ['./agregarproducto.page.scss'],
})
export class AgregarproductoPage implements OnInit {

  nombre: string;
  descripcion: string;
  cantidad: number;
  preciodeventa: number;
  preciodecosto: number;
  url = '';
  respuesta: any;
  constructor(public http: HttpClient, public modalController: ModalController) { }

  guardarProducto() {
    const uri = 'https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=agregar&idDueno=1&nombre=' + this.nombre 
    + '&descripcion=' + this.descripcion
    + '&preciodecosto=' + this.preciodecosto +
    '&preciodeventa=' + this.preciodeventa +
    '&cantidad=' + this.cantidad +
    '&fotografia=' + this.url;
    
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
cancelar() {
this.modalController.dismiss();
}
  ngOnInit() {
  }

}
