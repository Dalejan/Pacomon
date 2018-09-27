import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LifePointsDirective } from "../directives/life-points.directive";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [AppComponent, LifePointsDirective, PokemonComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
