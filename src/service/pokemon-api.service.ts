import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  private apiKey = "ab7e1c09-1291-4868-99da-c1835614a4eb"
  private apiURL = "https://api.pokemontcg.io/v2/"

  constructor( private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json',
      'X-Api-Key': this.apiKey
    })
  }

  getPokemonData(): Observable<any>{
    const headers = this.getHeaders();
    const searchQuery = "nationalPokedexNumbers:0";
    return this.http.get<any>(`${this.apiURL}/cards?q=${searchQuery}`, { headers })
  }

  getPokemonByNumber(pokedexNumber: number): Observable<any>{
    const headers = this.getHeaders();
    const searchQuery = "nationalPokedexNumbers:"+pokedexNumber;
    return this.http.get<any>(`${this.apiURL}/cards?q=${searchQuery}`, { headers })
  }

  getPokemonByName(name: string): Observable<any>{
    const headers = this.getHeaders();
    const searchQuery = `name:`+name;
    return this.http.get<any>(`${this.apiURL}/cards?q=${searchQuery}`, { headers })

  }

}
