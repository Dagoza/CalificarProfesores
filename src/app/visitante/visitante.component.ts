import { Component, OnInit } from '@angular/core';
import { DatosService } from '../Service/datos.service';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent implements OnInit {
  numero = 2;
  constructor(public datos: DatosService) { }

  ngOnInit() {
  }

  mostrar(i) {
    console.log(i);
    this.numero = i;
  }

}
