import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon-req.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.html',
  styleUrls: ['./pokemon-card.scss'],
  standalone: false
})
export class PokemonCard {
  @Input() pokemon!: Pokemon;
  @Output() selected = new EventEmitter<Pokemon>();

  onClick() {
    this.selected.emit(this.pokemon);
  }
}