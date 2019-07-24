import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Service/datos.service';

@Component({
  selector: 'app-pendiente',
  templateUrl: './pendiente.component.html',
  styleUrls: ['./pendiente.component.css']
})
export class PendienteComponent implements OnInit {
  // table
  listOfData = [];

  constructor(public data: DatosService) {
    this.listOfData = data.currentUser.calificaciones;
  }

  ngOnInit() {
  }

  calificar(data) {
    console.log(data);
    data.calificado = true;
    const pos = { posCurrent: 0, posUser: 0, posProfe: 0 };
    this.data.users.forEach((element, index) => {
      if (element.nombre = this.data.currentUser.nombre) {
        pos.posUser = index;
      }
    });
    this.data.currentUser.calificaciones.forEach((element, index) => {
      if (element.id = data.id) {
        pos.posCurrent = index;
      }
    });
    this.data.currentUser.calificaciones[pos.posCurrent] = data;
    this.data.users[pos.posUser].calificaciones[pos.posCurrent] = data;
    this.data.profesores.forEach((element, index) => {
      if (element.id = data.idProfesor) {
        pos.posProfe = index;
      }
    });
    this.data.contadores();
  }
}
