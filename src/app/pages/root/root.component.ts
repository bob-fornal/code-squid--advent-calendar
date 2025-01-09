import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { Tile } from '../../core/interfaces/Tile';

@Component({
  selector: 'app-root',
  imports: [
    MatGridListModule,
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  tiles: Array<Tile & { text?: string }> = [];

  constructor() {
    for (let i = 0, len = 6; i < len; i++) {
      const group: Array<Tile & { text?: string }> = [
        { text: 'One' },
        { text: 'Two' },
        { text: 'Three' },
        { text: 'Four' },
        { text: 'Five' },
        { text: 'Six' },
      ];
      this.tiles.push(...group);
    }

    delete this.tiles[8].text;
    this.tiles[8].path='/path-here';
  }

  hasText = (tile: Tile & { text?: string }): boolean => {
    return tile.hasOwnProperty('text');
  };
}
