import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Service/datos.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  // Search
  inputValue: string;
  options = [];
  currentRate = 4;
  // table
  listOfData = [];
  datosModal = {
    id: 0,
    nombre: '',
    rate: 0,
    materia: [],
  };
  opiniones = [];

  constructor(private data: DatosService) {
    this.listOfData = data.profesores;
    data.profesores.forEach(element => {
      element.materia.forEach(x => {
        this.options.push(x);
      });
    });
  }

  ngOnInit() {
  }

  modal(data) {
    this.datosModal = data;
    this.opiniones = [];
    this.data.users.forEach(element => {
      element.calificaciones.forEach(x => {
        if (x.idProfesor === data.id && x.calificado) {
          const info = { user: element.nombre, x };
          this.opiniones.push(info);
        }
      });
    });
  }

}
