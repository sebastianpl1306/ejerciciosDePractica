import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {
  // i18 Select
  public name: string = 'Sebastian';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Maria','Pedro','Sebastian','Fernando','Melissa','Antonio','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Sebastian',
    age: 22,
    address: 'Bogotá, Colombia'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500)
  });
}
