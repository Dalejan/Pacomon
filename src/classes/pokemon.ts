export class Pokemon {
  
  name: String;
  hp: number;
  lvl: number;
  tipos: String[];
  sprite: String;
  power: String;

  constructor(
    name: string,
    hp: number,
    lvl: number,
    tipos: String[],
    sprite: String,
    power: String
  ) {
    this.name = name;
    this.hp = hp;
    this.lvl = lvl;
    this.tipos = tipos;
    this.sprite = sprite;
    this.power = power;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getHp() {
    return this.hp;
  }

  setHp(hp) {
    this.hp = hp;
  }

  getLvl() {
    return this.lvl;
  }

  setLvl(lvl) {
    this.lvl = lvl;
  }

  getTipos() {
    return this.tipos;
  }

  setTipos(tipos) {
    this.tipos = tipos;
  }

  getSprite() {
    return this.sprite;
  }

  setSprite(sprite) {
    this.sprite = sprite;
  }

  getPower(){
    return this.power;
  }

  setPower(power){
    this.power = power;
  }

  setAllData(
    name: String,
    hp: number,
    lvl: number,
    sprite: String,
    tipos: String[],
    power: String
  ) {
    this.setName(name);
    this.setHp(hp);
    this.setLvl(lvl);
    this.setSprite(sprite);
    this.setTipos(tipos);
    this.setPower(power);
  }
}
