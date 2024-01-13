import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  contador: number = 15;

  counter(number: number) {
    this.contador += number;
  }

  reset() {
    this.contador = 15;
  }
}
