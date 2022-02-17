import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  
  //i18nSelect
  nombre: string = 'lectora';
  genero: string = 'femenino';

  mensaje = {
    'masculino': 'contento',
    'femenino': 'contenta'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Juan','Carlos', 'Evelyn', 'Karla', 'Angela']
  clientesi18 = {
    '=0': 'No hay clientes esperando',
    '=1': '1 cliente esperando',
    '=2': '2 clientes esperando',
    'other': '# clientes esperando'
  }

  cambiarPersona(){
    if(this.nombre == 'lectora'){
      this.nombre = 'lector';
      this.genero = 'masculino'
    }
    else{
      this.nombre = 'lectora';
      this.genero = 'femenino';    
    }
  }

  borrarCliente(){
    this.clientes.pop()
  }


  //keyValue pipe
  persona = {
    nombre: 'rodrigo',
    edad: 24,
    direccion: 'rcgua, chile'
  }

  //JSON pipe
  heroes = 
  [
    {
      nombre: 'Superman',
      vuela: 'true'
    },
    {
      nombre: 'Robin',
      vuela: 'false'
    },
    {
      nombre: 'Batman',
      vuela: 'false'
    },
  ]

  //Async Pipe
  miObservable = interval(1000)

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa')
    }, 3500);
  })
}
