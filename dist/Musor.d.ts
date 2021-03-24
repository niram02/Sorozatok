export default class Musor {
    private _radiosorszam;
    private _szamhossz;
    private _azonosito;
    get radiosorszam(): number;
    get szamhossz(): number[];
    get azonosito(): string[];
    constructor(sor: string);
}
