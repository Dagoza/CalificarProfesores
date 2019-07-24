import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Service/datos.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  // table
  listOfData = [];

  constructor(private data: DatosService) {
    this.listOfData = data.currentUser.calificaciones;
    console.log(this.listOfData);
  }

  ngOnInit() {
  }

}
