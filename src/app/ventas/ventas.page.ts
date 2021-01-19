import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {

  records: [];
  fechaInicio: string = ""
  fechaFin: string = ""
  usuario: any

  constructor(private router: Router, public http: HttpClient) {
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
   }

  ngOnInit() {
    this.loadRecords()
  }

  loadRecords(){
    const uri = 'https://appinventor2020.000webhostapp.com/tienda_api/ventas.php?comando=listar&idDueno='+this.usuario.id;
    this.http.get(uri).subscribe(data => {
      const res: any = data;
      this.records = res.records;
    })
  } 

  searchByDate(){
    
    let fechaInicio = this.formatDate(this.fechaInicio.toString())
    let fechaFin = this.formatDate(this.fechaFin.toString())

    const uri = `https://appinventor2020.000webhostapp.com/tienda_api/ventas.php?comando=buscar&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&idDueno=${this.usuario.id}`;
    this.http.get(uri).subscribe(data => {
      const res: any = data;
      this.records = res.records;
    })
  }

  formatDate(fecha: string): string{
    fecha = fecha.split("T")[0]
    let dia = fecha.split("-")[2];
    let mes = fecha.split("-")[1];
    let anio = fecha.split("-")[0];

    return dia + "-" + mes + "-" + anio
  }
}
