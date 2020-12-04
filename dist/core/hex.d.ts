/**
 * /core/hex.ts
 *
 * Being that HEX is an integral piece for communicating via PTZ
 * this file contains shared functions that aim to make manipulating
 * hex a little easier.
 */
/// <reference types="node" />
export declare function hexToBuffer(decimalNumber: number): Buffer;
export declare function bufferToHex(buffer: Buffer): string;
