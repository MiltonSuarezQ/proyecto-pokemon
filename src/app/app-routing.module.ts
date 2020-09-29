import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component'; 
import { PokemonDosComponent } from './pokemon-dos/pokemon-dos.component'; 
import { PokemonComponent } from './pokemon/pokemon.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{ path: '', component:PokemonComponent},
                        { path: 'pokemon', component:PokemonDetailComponent},
                        { path: 'pokemon-dos', component:PokemonDosComponent},
                        { path: 'search', component:SearchComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
