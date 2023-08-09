import { Component } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent{
  public character: Character = {
    name: '',
    power: 0
  };
}
