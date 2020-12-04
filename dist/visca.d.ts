/// <reference types="node" />
import { EventEmitter } from 'events';
import { AbstractCommand } from './commands';
export declare class ViscaDevice extends EventEmitter {
    private _address;
    private _socket;
    constructor(address: string);
    connect(): void;
    disconnect(): void;
    get address(): string;
    set address(address: string);
    sendCommand(command: AbstractCommand): Promise<any>;
}
