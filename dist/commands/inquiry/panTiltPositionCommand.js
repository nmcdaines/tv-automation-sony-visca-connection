"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanTiltPositionCommand = void 0;
const abstractCommand_1 = require("../abstractCommand");
const hex_1 = require("../../core/hex");
function convertNumberToPosition(n) {
    const max = 65535;
    const mid = 32768;
    return n < mid ? n : n - max;
}
class PanTiltPositionCommand extends abstractCommand_1.ViscaInquiryCommand {
    serialize() {
        return Buffer.from([0x81, 0x09, 0x06, 0x12, 0xff]);
    }
    deserialize(payload) {
        console.log(payload);
        // PAN: MIN/MAX = -2978/372
        // TILT: MIN/MAX = -1880/2216
        const panPayload = payload.slice(2, 6);
        const panHex = hex_1.bufferToHex(panPayload);
        const panPosition = convertNumberToPosition(parseInt(panHex));
        const tiltPayload = payload.slice(6, 10);
        const tiltHex = hex_1.bufferToHex(tiltPayload);
        const tiltPosition = convertNumberToPosition(parseInt(tiltHex));
        return {
            pan: panPosition,
            tilt: tiltPosition,
        };
    }
}
exports.PanTiltPositionCommand = PanTiltPositionCommand;
//# sourceMappingURL=panTiltPositionCommand.js.map