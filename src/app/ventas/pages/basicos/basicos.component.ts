import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'rodrigo';
  nombreUpper: string = 'RODRIGO';
  nombreCompleto: string = 'rOdRiGo iBaÑeZ';  

  fecha: Date = new Date();

}
