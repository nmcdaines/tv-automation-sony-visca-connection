"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetSequenceNumberCommand = void 0;
const abstractCommand_1 = require("../abstractCommand");
class ResetSequenceNumberCommand extends abstractCommand_1.ControlCommand {
    serialize() {
        return Buffer.from([0x02, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x01]);
    }
}
exports.ResetSequenceNumberCommand = ResetSequenceNumberCommand;
//# sourceMappingURL=resetSeqNumberCommand.js.map