import { ViscaCommand } from '../abstractCommand'

function hexToBuffer(n: number) {
  const hexString = parseInt(`${n}`)
    .toString(16)
    .padStart(4, n > 32768 ? 'f' : '0');

  const hexChars = Array.from(hexString);
  
  const packet = hexChars.reduce((acc, val) => {
		return `${acc}0${val}`;
	}, "");

  return Buffer.from(packet, "hex");
}

function convertPositionToNumber(n: number) {
	const max = 65535;
	return n < 0 ? max + n : n;
}

export class PanTiltDirectDriveCommand extends ViscaCommand {
  panSpeed: number
  tiltSpeed: number
  
  panPosition: number
  tiltPosition: number

	serialize () {
    const buffer = Buffer.alloc(2);
    
		buffer.writeUInt8(this.panSpeed, 0)
    buffer.writeUInt8(this.tiltSpeed, 1)

    const panValue = convertPositionToNumber(this.panPosition);
    const panHex = hexToBuffer(panValue);

    const tiltValue = convertPositionToNumber(this.tiltPosition);
    const tiltHex = hexToBuffer(tiltValue);

		return Buffer.from([ 0x80, 0x01, 0x06, 0x02, ...buffer, ...panHex, ...tiltHex, 0xff ])
	}
}
