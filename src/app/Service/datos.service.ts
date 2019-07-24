import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  users = [{
    id: 1,
    user: 'daniel_gomez82141@elpoli.edu.co',
    pass: '1234',
    nombre: 'Daniel',
    rol: 'Student',
    calificaciones: [{
      id: 1,
      idProfesor: 1,
      nombre: 'Francisco Gonzales Vidal',
      idMateria: 1,
      materia: 'Humanidades',
      calificado: true,
      rate: 3,
      comentario: 'Un profesor muy mediocre'
    }, {
      id: 2,
      idProfesor: 2,
      nombre: 'Ricardo Leon Isaza',
      idMateria: 2,
      materia: 'Calculo I',
      calificado: true,
      rate: 5,
      comentario: 'Un profesor muy bueno'
    }, {
      id: 3,
      idProfesor: 2,
      nombre: 'Ricardo Leon Isaza',
      idMateria: 3,
      materia: 'Geometría',
      calificado: false,
      rate: 0,
      comentario: ''
    }]
  }, {
    id: 2,
    user: 'Alex_algo82141@elpoli.edu.co',
    pass: '1234',
    nombre: 'Alex',
    rol: 'Student',
    calificaciones: [
      {
        id: 4,
        idProfesor: 3,
        nombre: 'Maryem ♥ <3',
        idMateria: 4,
        materia: 'Algoritmos 1',
        calificado: false,
        rate: 0,
        comentario: ''
      }
    ]
  }, {
    id: 3,
    user: 'moderador@elpoli.edu.co',
    pass: '1234',
    nombre: 'Master',
    rol: 'Admin',
    calificaciones: []
  }];

  profesores = [
    {
      id: 1,
      nombre: 'Francisco Gonzales Vidal',
      rate: 3,
      materia: [{
        id: 1,
        nombre: 'Humanidades'
      }]
    },
    {
      id: 2,
      nombre: 'Ricardo Leon Isaza',
      rate: 5,
      materia: [{
        id: 2,
        nombre: 'Calculo I'
      }, {
        id: 3,
        nombre: 'Geometría'
      }]
    },
    {
      id: 2,
      nombre: 'Maryem ♥ <3',
      rate: 0,
      materia: [{
        id: 4,
        nombre: 'Algoritmos I'
      }]
    }
  ];


  currentUser = {
    id: 1,
    user: 'daniel_gomez82141@elpoli.edu.co',
    pass: '1234',
    nombre: 'Daniel',
    rol: 'Student',
    calificaciones: [{
      id: 1,
      idProfesor: 1,
      nombre: 'Francisco Gonzales Vidal',
      idMateria: 1,
      materia: 'Humanidades',
      calificado: true,
      rate: 3,
      comentario: 'Un profesor muy mediocre'
    }, {
      id: 2,
      idProfesor: 2,
      nombre: 'Ricardo Leon Isaza',
      idMateria: 2,
      materia: 'Calculo I',
      calificado: true,
      rate: 5,
      comentario: 'Un profesor muy bueno'
    }, {
      id: 3,
      idProfesor: 2,
      nombre: 'Ricardo Leon Isaza',
      idMateria: 3,
      materia: 'Geometría',
      calificado: false,
      rate: 0,
      comentario: ''
    }]
  };

  contCalificaciones = 0;
  contPendientes = 0;

  contadores() {
    this.contCalificaciones = 0;
    this.contPendientes = 0;
    this.currentUser.calificaciones.forEach(element => {
      if (element.calificado) {
        this.contCalificaciones++;
      } else {
        this.contPendientes++;
      }
    });
  }

}
