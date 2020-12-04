/// <reference types="node" />
import { ViscaCommand } from '../abstractCommand';
export declare class PanTiltDirectDriveCommand extends ViscaCommand {
    panSpeed: number;
    tiltSpeed: number;
    panPosition: number;
    tiltPosition: number;
    serialize(): Buffer;
}
