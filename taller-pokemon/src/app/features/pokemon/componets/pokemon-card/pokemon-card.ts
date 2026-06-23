import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon-req.model';

@Component({
  selector: 'app-pokemon-card',
  standalone: false,
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.scss',
})
export class PokemonCard {
  @Input() pokemon!: Pokemon;
  @Output() selected = new EventEmitter<Pokemon>();

  onClick() {
    this.selected.emit(this.pokemon);
  }
}