import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, switchMap, map, catchError, throwError } from 'rxjs';
import { PokemonListResponse } from '../models/pokemon-list-response.model';
import { Pokemon } from '../models/pokemon-req.model';  // tu modelo de detalle

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<PokemonListResponse>(this.API_URL).pipe(
      switchMap((response) => {
        // Cada elemento de results tiene name y url (url apunta al detalle)
        const detailRequests = response.results.map((p) =>
          this.http.get<Pokemon>(p.url)
        );
        return forkJoin(detailRequests).pipe(
          map((pokemons) => pokemons) // map requerido (aunque sea identity)
        );
      }),
      catchError((error) => {
        console.error('Error en el servicio Pokemon:', error);
        // Relanzamos el error para que el componente lo maneje
        return throwError(() => new Error('Error al cargar los Pokémon.'));
      })
    );
  }
}