import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatosService } from '../Service/datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje = '';
  form: FormGroup;

  constructor(private router: Router, private Datos: DatosService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  send() {
    if (!this.form.valid) {
      this.mensaje = 'Datos inválidos.';
    } else {
      const datos = this.Datos.users.filter(x => x.user === this.form.value.email && x.pass === this.form.value.password);
      if (datos.length === 0) {
        this.mensaje = 'Datos incorrectos.';
      } else {
        this.Datos.currentUser = datos[0];
        (datos[0].rol === 'Student') ? this.router.navigate(['/student']) : this.router.navigate(['/admin']);
      }
    }
  }

  invitado() {
    this.Datos.currentUser.rol = 'Visitante';
    this.router.navigate(['/visitante']);
  }
}
