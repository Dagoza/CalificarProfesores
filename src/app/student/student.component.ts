import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Service/datos.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  numero = 1;

  constructor(public datos: DatosService) {
    datos.contadores();
  }

  ngOnInit() {
  }

  mostrar(i) {
    console.log(i);
    this.numero = i;
  }


}
