import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {
  public nameLower: string = 'sebastian';
  public nameUpper: string = 'SEBASTIAN';
  public fullName: string = 'sEBAstIAn PabON';

  public customDate: Date = new Date();
}
