"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Musor {
    constructor(sor) {
        this._szamhossz = [];
        this._azonosito = [];
        const m = sor.split(" ");
        this._radiosorszam = parseInt(m[0]);
        this._szamhossz[0] = parseInt(m[1]);
        this._szamhossz[1] = parseInt(m[2]);
        let sor2 = "";
        for (let index = 3; index < m.length; index++) {
            sor2 += m[index];
        }
        sor2.trim();
        let azonosito = sor2.split(":");
        this._azonosito[0] = azonosito[0];
        this._azonosito[1] = azonosito[1];
    }
}
exports.default = Musor;
//# sourceMappingURL=Musor.js.map