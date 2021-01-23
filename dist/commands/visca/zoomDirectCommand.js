"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomDirectCommand = void 0;
const abstractCommand_1 = require("../abstractCommand");
const hex_1 = require("../../core/hex");
/**
 * Note:
 * The maximum zoom for birddog is:
 * - HEX(4000) or
 * - DEC(16384).
 */
class ZoomDirectCommand extends abstractCommand_1.ViscaCommand {
    serialize() {
        const buffer = hex_1.hexToBuffer(this.position);
        return Buffer.from([0x81, 0x01, 0x04, 0x47, ...buffer, 0xff]);
    }
}
exports.ZoomDirectCommand = ZoomDirectCommand;
//# sourceMappingURL=zoomDirectCommand.js.map