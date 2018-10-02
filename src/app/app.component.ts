import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { Pokemon } from "../classes/pokemon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [AngularFireDatabase]
})
export class AppComponent {
  pokemons: Observable<any[]>;
  enemyPokemon: Pokemon;
  trainerPokemon: Pokemon;

  constructor(db: AngularFireDatabase) {
    this.pokemons = db.list("pokemons").valueChanges();
  }

  ngOnInit() {
    this.enemyPokemon = new Pokemon("", 1, 0, [""], "", "");
    this.trainerPokemon = new Pokemon("", 1, 0, [""], "", "");

    this.pokemons.subscribe(Pokemons => {
      this.enemyPokemon.setAllData(
        Pokemons[0].name,
        Pokemons[0].hp,
        Pokemons[0].level,
        "/src/assets/charizard.gif",
        Pokemons[0].types,
        Pokemons[0].power
      );

      this.trainerPokemon.setAllData(
        Pokemons[1].name,
        Pokemons[1].hp,
        Pokemons[1].levl,
        Pokemons[1].sprite,
        Pokemons[1].types,
        Pokemons[1].power
      );
    });
  }
  Attack(event) {
    console.log(event.pokemon.power);
    this.pokemons.subscribe(Pokemons => {
      this.enemyPokemon.setHp(+this.enemyPokemon.getHp - event.pokemon.power);
    });
  }
}
