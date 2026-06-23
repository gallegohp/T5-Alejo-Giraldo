import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, of } from 'rxjs';
import { PokemonResponse } from '../../models/pokemon-req-list.model';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
})
export class PokemonList implements OnInit{

  pokemonList$: Observable<PokemonResponse[]> = of([]);

  constructor(
    private pokemonService: PokemonService
  ){}

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe
  }

}
