import {
  Directive,
  ElementRef,
  Input
} from "@angular/core";

@Directive({
  selector: "[appLifePoints]"
})
export class LifePointsDirective {
  @Input("appLifePoints") appLifePoints: number;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.changeLife();
  }

  changeLife() {
    const lp = this.appLifePoints || 100;

    this.el.nativeElement.style.width = lp + "%";
    if (lp >= 0 && lp < 30) {
      this.el.nativeElement.style.backgroundColor = "#ff0404";
    } else if (lp > 30 && lp < 60) {
      this.el.nativeElement.style.backgroundColor = "#ffe11f";
    } else if (lp > 60 && lp <= 100) {
      this.el.nativeElement.style.backgroundColor = "#5fe29a";
    }
  }
}
