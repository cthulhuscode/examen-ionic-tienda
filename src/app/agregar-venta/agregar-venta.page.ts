import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.page.html',
  styleUrls: ['./agregar-venta.page.scss'],
})
export class AgregarVentaPage implements OnInit {

  idDueno: number = 1;
  idProducto: number = -1;
  fecha: string = new Date().toLocaleDateString();
  producto: string;
  precio: number = 100;
  precioDeCosto: number;
  cantidad: number = 1;
  precioTotal: number = 0;
  respuesta: string;

  constructor(public http: HttpClient, public modalController: ModalController) { }

  ngOnInit() {
    //this.getProducto()    
  }

  addVenta(){
    if(this.cantidad <= 0){
      alert("Ingresa una cantidad mayor a 0")
      return;      
    }

    let fecha = this.formatDate(this.fecha);
    let ganancia = this.precioTotal - (this.precioDeCosto * this.cantidad);


    const uri = `https://appinventor2020.000webhostapp.com/tienda_api/ventas.php?comando=agregar&
    idDueno=${this.idDueno}&
    idProducto=${this.idProducto}&
    cantidad=${this.cantidad}&
    precioTotal=${this.precioTotal}&
    ganancia=${ganancia}&
    fecha=${fecha}`;

    this.http.get(uri).subscribe(data => {
      const res: any = data;
      this.respuesta = res.records;
    })
  }

  cancelar() {
    this.modalController.dismiss();
  }

  formatDate(fecha: string): string{    
    let dia = fecha.split("/")[0];
    let mes = fecha.split("/")[1];
    let anio = fecha.split("/")[2];

    return dia + "-" + mes + "-" + anio
  }

  calculatePrecioTotal(){
    if(this.cantidad >= 1)
      this.precioTotal = this.cantidad * this.precio;
    else
      this.precioTotal = 0;      
  }

  getProducto(){
    const uri = `https://appinventor2020.000webhostapp.com/tienda_api/productos.php?comando=buscar&id=${this.idProducto}&idDueno=${this.idDueno}`;
    this.http.get(uri).subscribe(data => {
      const res: any = data;
      const producto = res.records;
      this.precioDeCosto = producto.preciodecosto;
    })
  }
}
//idDueno=1&idProducto=1&cantidad=5&precioTotal=50&ganancia=40&fecha=01-01-21
