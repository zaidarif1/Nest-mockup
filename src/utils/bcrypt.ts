import * as bcrypt from "bcrypt";

export function encodePass(rawPass: string) {
    const SALT = bcrypt.genSaltSync();
    return bcrypt.hashSync(rawPass, SALT);
}