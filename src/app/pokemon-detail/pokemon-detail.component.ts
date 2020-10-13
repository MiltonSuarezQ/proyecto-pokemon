import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  public URL : any = 'https://pokeapi.co/api/v2/pokemon/';
  public url : string;
  public pokemonDetail : any;
  public abilities: any;
  public indices: any;
  public moves: any;
  public stats: any; 

  constructor(private route: ActivatedRoute,private HttpClient:HttpClient) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.url = this.URL+id;
    this.HttpClient.get(this.url).subscribe(
      res=>{        
        this.pokemonDetail = res;
        this.abilities = this.pokemonDetail.abilities;
        this.indices = this.pokemonDetail.game_indices;
        this.moves = this.pokemonDetail.moves;
        this.stats = this.pokemonDetail.stats;
        console.log('Pokemon detail',this.pokemonDetail) 
        console.log('Pokemon detail',this.indices)
        console.log('Pokemon detail',this.moves)
        console.log('Pokemon detail',this.stats)          
      }, 
      err=> console.log(err)
    )
  }

}
