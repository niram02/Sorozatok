"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Musor_1 = tslib_1.__importDefault(require("./Musor"));
const fs_1 = tslib_1.__importDefault(require("fs"));
class Megoldas {
    constructor(forras) {
        this._Musorok = [];
        const sorok = fs_1.default.readFileSync(forras).toString().split("\n");
        for (let index = 1; index < sorok.length; index++) {
            const aktSor = sorok[index].trim();
            if (aktSor.length != 0) {
                this._Musorok.push(new Musor_1.default(aktSor));
            }
        }
    }
    get Musorokszama() {
        return this._Musorok.length;
    }
    get osszesmusor() {
        let musorok = "";
        this._Musorok.forEach((element) => {
            musorok += element.radiosorszam + " ";
            musorok += element.szamhossz + " ";
            musorok += element.azonosito + "\n";
        });
        return musorok;
    }
}
exports.default = Megoldas;
//# sourceMappingURL=Megoldas.js.map