"use strict";
/**
 * /core/hex.ts
 *
 * Being that HEX is an integral piece for communicating via PTZ
 * this file contains shared functions that aim to make manipulating
 * hex a little easier.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToHex = exports.hexToBuffer = void 0;
function hexToBuffer(decimalNumber) {
    const hexString = parseInt(`${decimalNumber}`)
        .toString(16)
        .padStart(4, '0');
    const hexChars = Array.from(hexString);
    const packet = hexChars.reduce((acc, val) => {
        return `${acc}0${val}`;
    }, "");
    return Buffer.from(packet, "hex");
}
exports.hexToBuffer = hexToBuffer;
function bufferToHex(buffer) {
    const chars = Array.from(buffer.toString("hex"));
    return chars.reduce((acc, val, index) => {
        return index % 2 ? `${acc}${val}` : `${acc}`;
    }, "0x");
}
exports.bufferToHex = bufferToHex;
//# sourceMappingURL=hex.js.map