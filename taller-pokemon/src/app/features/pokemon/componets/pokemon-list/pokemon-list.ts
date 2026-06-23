import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../../models/pokemon-req.model';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
})
export class PokemonList implements OnInit{

  pokemonList$: Observable<Pokemon[]> = of([]);
  selectedPokemon: Pokemon | null = null;
  loading = true;
  error = '';

  constructor(
    private pokemonService: PokemonService
  ){}

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe({
      next: (pokemons) => {
        this.pokemonList$ = of(pokemons);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los Pokémon';
        this.loading = false;
      }
    });
  }

  onSelectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  onCloseDetail() {
    this.selectedPokemon = null;
  }

}
