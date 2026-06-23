import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap, forkJoin, catchError, of } from 'rxjs';
import { PokemonListResponse } from '../models/pokemon-list-response.model';
import { PokemonResponse } from '../models/pokemon-req-list.model';
import { Pokemon } from '../models/pokemon-req.model';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';


  constructor(
    private http: HttpClient
  ) {}

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<PokemonListResponse>(this.API_URL).pipe(
      switchMap((response) => {
        const detailRequests = response.results.map((pokemon) =>
          this.http.get<Pokemon>(pokemon.url)
        );
        return forkJoin(detailRequests).pipe(
          map((pokemons) => pokemons),
          catchError((error) => {
            console.error('Error fetching pokemon details:', error);
            return of([]);
          })
        );
      }),
      catchError((error) => {
        console.error('Error fetching pokemon list:', error);
        return of([]);
      })
    );
  }

}
