import Musor from "./Musor";
import fs from "fs";
export default class Megoldas {
  //Privát adattagok
  private _Musorok: Musor[] = [];
  public get Musorokszama() {
    return this._Musorok.length;
  }
  public get osszesmusor(): string {
    let musorok: string = "";
    this._Musorok.forEach((element) => {
      musorok += element.radiosorszam + " ";
      musorok += element.szamhossz + " ";
      musorok += element.azonosito + "\n";
    });
    return musorok;
  }

  //Konstruktor
  public constructor(forras: string) {
    const sorok: string[] = fs.readFileSync(forras).toString().split("\n");
    for (let index = 0; index < sorok.length; index++) {
      const aktSor: string = sorok[index].trim();
      if (aktSor.length != 0) {
        this._Musorok.push(new Musor(aktSor));
      }
    }
  }

  //Metódusok
}
