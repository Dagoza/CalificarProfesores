import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Service/datos.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  numero = 2;
  constructor(public datos: DatosService) { }

  ngOnInit() {
  }

  mostrar(i) {
    console.log(i);
    this.numero = i;
  }

}
