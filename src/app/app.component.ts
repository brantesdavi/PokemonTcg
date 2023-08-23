import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonApiService } from 'src/service/pokemon-api.service';
import { Card } from '../app/models/card.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon-tcg';

  imgCard: string | undefined;

  pokemonName: string = '';

  card: Card | undefined;

  isCarouselVisible: boolean = false;
  
  mouseX = 0;
  mouseY = 0;

  constructor(
    private pokemonService: PokemonApiService
  ){}

  ngOnInit(){
    this.getRandom()
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  getPokemonByName(): void{
    this.pokemonService.getPokemonByName(this.pokemonName)
    .subscribe(
      (data) =>{
        this.card = {
          id: data.data[0].id,
          name: data.data[0].name,
          supertype: data.data[0].supertype,
          subtypes: data.data[0].subtypes,
          types: data.data[0].types,
          number: data.data[0].number,
          artist: data.data[0].artist,
          rarity: data.data[0].rarity,
          flavorText: data.data[0].flavorText,
          nationalPokedexNumbers: data.data[0].nationalPokedexNumbers,
          images: data.data[0].images.small
        };
        this.isCarouselVisible = true;
      },
      (error) => {
        console.error('Erro ao obter dados: ', error)
      }
    )
  }


  randomNumber(minimo: number, maximo:number): number{
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  getRandom(): void{
    this.pokemonService.getPokemonByNumber(this.randomNumber(0,906))
    .subscribe(
      (data) => {
        const tamanho = data.data.length - 1
        const randomIndex = this.randomNumber(0, tamanho)
        this.card = {
          id: data.data[randomIndex].id,
          name: data.data[randomIndex].name,
          supertype: data.data[randomIndex].supertype,
          subtypes: data.data[randomIndex].subtypes,
          types: data.data[randomIndex].types,
          number: data.data[randomIndex].number,
          artist: data.data[randomIndex].artist,
          rarity: data.data[randomIndex].rarity,
          flavorText: data.data[randomIndex].flavorText,
          nationalPokedexNumbers: data.data[randomIndex].nationalPokedexNumbers,
          images: data.data[randomIndex].images.small
        };
        console.log(this.card)
      },
      (error) => {
        console.error('Erro ao obter dados: ', error)
      }
    )
  }

  getPokemon(): void{
    this.pokemonService.getPokemonData().subscribe(
      (data) => {
        this.card = {
          id: data.data[0].id,
          name: data.data[0].name,
          supertype: data.data[0].supertype,
          subtypes: data.data[0].subtypes,
          types: data.data[0].types,
          number: data.data[0].number,
          artist: data.data[0].artist,
          rarity: data.data[0].rarity,
          flavorText: data.data[0].flavorText,
          nationalPokedexNumbers: data.data[0].nationalPokedexNumbers,
          images: data.data[0].images.small
        };
      },
      (error) => {
        console.error('aa')
      }
    )
  }
}
