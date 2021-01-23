"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetCommand = void 0;
const abstractCommand_1 = require("../abstractCommand");
class PresetCommand extends abstractCommand_1.ViscaCommand {
    serialize() {
        return Buffer.from([
            0x81, 0x01, 0x04, 0x3f,
            this.operation, this.memoryNumber,
            0xff
        ]);
    }
}
exports.PresetCommand = PresetCommand;
//# sourceMappingURL=presetCommand.js.map