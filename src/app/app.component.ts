import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculo';

  public btnCalcular_click(): void
  {
    console.log('btnCalcular');
    console.log((document.getElementById('edad1') as HTMLInputElement).value);

    let edad1: number;
    let edad2: number;

    edad1 = parseInt((document.getElementById('edad1') as HTMLInputElement).value, 10);
    edad2 = parseInt((document.getElementById('edad2') as HTMLInputElement).value, 10);
    (document.getElementById('resultadoSuma') as HTMLInputElement).value = (edad1 + edad2).toString();
    (document.getElementById('resultadoPromedio') as HTMLInputElement).value = ((edad1 + edad2) / 2).toString();
  }

  public btnLimpiar_click(): void
  {
    console.log('btnLimpiar');
    (document.getElementById('edad1')as HTMLInputElement).value = '';
    (document.getElementById('edad2')as HTMLInputElement).value = '';
    (document.getElementById('resultadoSuma')as HTMLInputElement).value = '';
    (document.getElementById('resultadoPromedio') as HTMLInputElement).value = '';
  }

}
