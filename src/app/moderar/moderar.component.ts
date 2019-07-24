import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Service/datos.service';

@Component({
  selector: 'app-moderar',
  templateUrl: './moderar.component.html',
  styleUrls: ['./moderar.component.css']
})
export class ModerarComponent implements OnInit {
  listOfData = [];
  constructor(private data: DatosService) {
    data.users.forEach(element => {
      element.calificaciones.forEach(x => {
        if (x.calificado) { this.listOfData.push(x); }
      });
    });
  }

  ngOnInit() {
  }

  eliminar(data) {
    const pos = { pos: 0, posUsers: 0 };
    this.data.users.forEach(element => {
      element.calificaciones.forEach((x, index) => {
        if (x.id === data.id) {
          pos.pos = index;
        }
      });
    });
    this.data.users.forEach((element, index) => {
      if (element.id === this.data.currentUser.id) {
        pos.posUsers = index;
      }
    });
    this.data.users[pos.posUsers].calificaciones.splice(pos.pos, 1);
    this.data.currentUser.calificaciones.splice(pos.pos, 1);
  }

}
