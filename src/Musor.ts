export default class Musor {
    //Privát adattagok
    private _radiosorszam: number;
    private _szamhossz: number[]=[];
    private _azonosito: string[]=[];
    

    //Konstruktor
    public constructor(sor: string) {
        const m: string[] = sor.split(";");
        this._radiosorszam = parseInt(m[0]);
        this._szamhossz[0] = parseInt(m[1]);
        this._szamhossz[1] = parseInt(m[2]);
        let azonosito = m[3].split(":");
        this._azonosito[0]=azonosito[0];
        this._azonosito[1]=azonosito[1];
    }

    //Metódusok
}