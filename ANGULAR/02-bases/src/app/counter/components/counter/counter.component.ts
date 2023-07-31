import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})
export class CounterComponent implements OnInit {
  public counter: number = 10;

  constructor() { }

  increaseBy( value: number = 1): void {
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 10;
  }

  ngOnInit() { }
}
