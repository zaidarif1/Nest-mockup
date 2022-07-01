"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodePass = void 0;
const bcrypt = require("bcrypt");
function encodePass(rawPass) {
    const SALT = bcrypt.genSaltSync();
    return bcrypt.hashSync(rawPass, SALT);
}
exports.encodePass = encodePass;
//# sourceMappingURL=bcrypt.js.map