import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  visible: boolean = true;

  @Input()
  characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {

    if ( !id ) return;

    console.log({ id })

    this.onDeleteId.emit(id);
  }

}
