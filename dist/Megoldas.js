"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Musor_1 = tslib_1.__importDefault(require("./Musor"));
const fs_1 = tslib_1.__importDefault(require("fs"));
class Megoldas {
    constructor(forras) {
        this._Musorok = [];
        const sorok = fs_1.default.readFileSync(forras).toString().split("\n");
        for (let index = 0; index < sorok.length; index++) {
            const aktSor = sorok[index].trim();
            if (aktSor.length != 0) {
                this._Musorok.push(new Musor_1.default(aktSor));
            }
        }
    }
    get Musorokszama() {
        return this._Musorok.length;
    }
}
exports.default = Megoldas;
//# sourceMappingURL=Megoldas.js.map