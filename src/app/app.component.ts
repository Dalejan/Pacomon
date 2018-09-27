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
    this.enemyPokemon = new Pokemon("", 1, 0, [""], "");
    this.trainerPokemon = new Pokemon("", 1, 0, [""], "");

    this.pokemons.subscribe(Pokemons => {
      this.enemyPokemon.setAllData(
        Pokemons[0].name,
        Pokemons[0].hp,
        Pokemons[0].lvl,
        "/src/assets/charizard.gif",
        Pokemons[0].tipos
      );

      this.trainerPokemon.setAllData(
        Pokemons[1].name,
        Pokemons[1].hp,
        Pokemons[1].lvl,
        Pokemons[1].sprite,
        Pokemons[1].tipos
      );
    });
  }
}
