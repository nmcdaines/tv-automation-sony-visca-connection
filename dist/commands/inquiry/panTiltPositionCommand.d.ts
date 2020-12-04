/// <reference types="node" />
import { ViscaInquiryCommand } from "../abstractCommand";
export declare class PanTiltPositionCommand extends ViscaInquiryCommand {
    serialize(): Buffer;
    deserialize(payload: Buffer): any;
}
