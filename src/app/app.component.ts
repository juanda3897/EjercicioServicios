import { Component } from '@angular/core';
import {CiudadesService} from './ciudades.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CiudadesService],
})
export class AppComponent {
  title = 'Servicios Ciudades';
  listaCiudades=[]
  constructor( servicio:CiudadesService){
    this.listaCiudades=servicio.getCiudades();
    
  }
}
