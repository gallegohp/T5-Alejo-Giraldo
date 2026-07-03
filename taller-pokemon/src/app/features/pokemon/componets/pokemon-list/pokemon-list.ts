import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon-req.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.scss'],
  standalone: false
})
export class PokemonList implements OnInit {
  pokemonList$: Observable<Pokemon[]> = of([]);
  selectedPokemon: Pokemon | null = null;
  loading = true;
  error = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemon()
      .pipe(
        catchError((err) => {
          this.error = 'No se pudieron cargar los Pokémon. Intenta de nuevo.';
          return of([]); 
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((pokemons) => {
        this.pokemonList$ = of(pokemons);
      });
  }

  trackById(index: number, pokemon: Pokemon): number {
    return pokemon.id;
  }

  onSelectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  onCloseDetail(): void {
    this.selectedPokemon = null;
  }
}