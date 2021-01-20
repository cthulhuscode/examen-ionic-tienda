import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;
  usuario: any;
  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private router: Router
  ) {
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator["app"].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  cerrarSesion() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator["app"].exitApp();
    });
    this.navCtrl.navigateBack("/login");
  }

  irProductos() {
    this.navCtrl.navigateForward("/crudproductos", {
      state: { usuario: this.usuario },
    });
  }

  irClientes() {
    this.navCtrl.navigateForward("/clientes", {
      state: { usuario: this.usuario },
    });
  }

  irVentas() {
    this.navCtrl.navigateForward("/ventas", {
      state: { usuario: this.usuario },
    });
  }
}
