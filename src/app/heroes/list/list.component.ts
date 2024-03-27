import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroesNames: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'She Hulk'];
  deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroesNames.pop();
  }

}
