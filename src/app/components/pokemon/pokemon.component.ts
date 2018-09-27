import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../classes/pokemon';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

    @Input() pokemon: Pokemon;
    @Input() isTrainer: Boolean = false;
    constructor() { }

    ngOnInit() {
    }

}
