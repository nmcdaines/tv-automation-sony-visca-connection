/// <reference types="node" />
import { ViscaCommand } from '../abstractCommand';
/**
 * Note:
 * The maximum zoom for birddog is:
 * - HEX(4000) or
 * - DEC(16384).
 */
export declare class ZoomDirectCommand extends ViscaCommand {
    position: number;
    serialize(): Buffer;
}
