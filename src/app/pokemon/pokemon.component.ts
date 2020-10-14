import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public URL : any = 'https://pokeapi.co/api/v2/pokemon';
  public url : string;
  public pokemon : any;
  public pokemones : string;
  constructor(private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.url = this.URL;
    this.HttpClient.get(this.url).subscribe(
      res=>{
        this.pokemon = res;
        this.pokemones = this.pokemon.results;
        console.log('Favorite detail',this.pokemones)          
      },
      err=> console.log(err)
    )
  }
}
