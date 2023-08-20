import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void{
    //TODO: Emitir el id del personaje
    this.onDelete.emit(id);
  }
}
