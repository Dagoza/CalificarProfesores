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
  }

  ngOnInit() {
    this.listOfData = [];
    this.data.users.forEach(element => {
      element.calificaciones.forEach(x => {
        if (x.calificado) {
          console.log(x);
          this.listOfData.push(x);
        }
      });
    });
  }

  eliminar(data) {
    const pos = { pos: 0, posUsers: 0 };
    console.log(data);
    this.data.users.forEach((element, i) => {
      console.log(element);
      element.calificaciones.forEach((x, index) => {
        console.log(x);
        console.log(x.id === data.id);
        console.log(index);
        console.log(i);
        if (x.id === data.id) {
          pos.pos = index;
          pos.posUsers = i;
        }
      });
    });
    console.log(pos);
    console.log(this.data.users);
    this.data.users[pos.posUsers].calificaciones.splice(pos.pos, 1);
    this.data.currentUser.calificaciones.splice(pos.pos, 1);
    console.log(this.data.users);
    this.ngOnInit();
  }

}
