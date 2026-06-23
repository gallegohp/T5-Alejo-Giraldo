import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, } from 'rxjs';
import { PokemonListResponse } from '../models/pokemon-list-response.model';
import { PokemonResponse } from '../models/pokemon-req-list.model';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';


  constructor(
    private http: HttpClient
  ) {}

  getAllPokemon(): Observable<PokemonResponse[]> {
    return this.http.get<PokemonListResponse>(this.API_URL).pipe(
      map((pokemons) => this.mapPokemons(pokemons))
    );
  }

  mapPokemons(pokemons: PokemonListResponse) {
    return pokemons.results.map((pokemon) => {
      return {
        name: pokemon.name,
        url: pokemon.url,
      };
    });
  }

}
