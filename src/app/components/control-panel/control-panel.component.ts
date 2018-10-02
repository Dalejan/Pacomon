import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Pokemon } from "../../../classes/pokemon";
@Component({
  selector: "app-control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.scss"]
})
export class ControlPanelComponent implements OnInit {
  @Input()
  pokemon: Pokemon;
  @Input()
  isTrainer: Boolean = false;

  @Output()
  evAttack = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  atack() {
    console.log("gg wp que locha hacer esto xD");
    this.evAttack.emit({ pokemon: this.pokemon });
  }
}
