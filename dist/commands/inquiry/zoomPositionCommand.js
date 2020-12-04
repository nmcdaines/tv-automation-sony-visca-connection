"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomPositionCommand = void 0;
const abstractCommand_1 = require("../abstractCommand");
const hex_1 = require("../../core/hex");
class ZoomPositionCommand extends abstractCommand_1.ViscaInquiryCommand {
    serialize() {
        return Buffer.from([0x80, 0x09, 0x04, 0x47, 0xff]);
    }
    deserialize(payload) {
        const zoomPayload = payload.slice(2, 6);
        const zoomHex = hex_1.bufferToHex(zoomPayload);
        const zoom = parseInt(zoomHex);
        return zoom;
    }
}
exports.ZoomPositionCommand = ZoomPositionCommand;
//# sourceMappingURL=zoomPositionCommand.js.map