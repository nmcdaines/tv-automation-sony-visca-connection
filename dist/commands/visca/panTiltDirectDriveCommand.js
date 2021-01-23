"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanTiltDirectDriveCommand = void 0;
const abstractCommand_1 = require("../abstractCommand");
const hex_1 = require("../../core/hex");
function convertPositionToNumber(n) {
    const max = 65535;
    return n < 0 ? max + n : n;
}
class PanTiltDirectDriveCommand extends abstractCommand_1.ViscaCommand {
    constructor() {
        super(...arguments);
        this.panSpeed = 0;
        this.tiltSpeed = 0;
        this.panPosition = 0;
        this.tiltPosition = 0;
    }
    serialize() {
        const buffer = Buffer.alloc(2);
        buffer.writeUInt8(this.panSpeed, 0);
        buffer.writeUInt8(this.tiltSpeed, 1);
        const panValue = convertPositionToNumber(this.panPosition);
        const panHex = hex_1.hexToBuffer(panValue);
        const tiltValue = convertPositionToNumber(this.tiltPosition);
        const tiltHex = hex_1.hexToBuffer(tiltValue);
        return Buffer.from([0x81, 0x01, 0x06, 0x02, ...buffer, ...panHex, ...tiltHex, 0xff]);
    }
}
exports.PanTiltDirectDriveCommand = PanTiltDirectDriveCommand;
//# sourceMappingURL=panTiltDirectDriveCommand.js.map