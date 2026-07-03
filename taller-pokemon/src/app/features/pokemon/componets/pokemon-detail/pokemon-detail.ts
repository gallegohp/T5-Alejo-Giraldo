import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon-req.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.html',
  styleUrls: ['./pokemon-detail.scss'],
  standalone: false
})
export class PokemonDetail {
  @Input() pokemon!: Pokemon;
  @Output() closed = new EventEmitter<void>();

  onClose() {
    this.closed.emit();
  }
}