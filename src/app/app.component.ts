import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  enemyPokemon = {
    name: 'Charizard',
    hp: 50,
    lvl: 100,
    tipos: ['Fuego', 'Volador'],
    sprite: '/src/assets/charizard.gif'
  };
  trainerPokemon = {
    name: 'Entei',
    hp: 20,
    lvl: 100,
    tipo1: ['Fuego'],
    sprite: 'https://vignette.wikia.nocookie.net/es.pokemon/images/f/fc/Entei_espalda_G5.gif/revision/latest?cb=20101227123557'
  };
}
