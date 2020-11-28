import { ViscaCommand } from '../abstractCommand'

function hexToBuffer(n: number) {
  const hexString = parseInt(`${n}`)
    .toString(16)
    .padStart(4, '0');

  const hexChars = Array.from(hexString);

  const packet = hexChars.reduce((acc, val) => {
    return `${acc}0${val}`;
  }, "");

  return Buffer.from(packet, "hex");
}

// function minMax(min, max, value) {
//   return Math.min(min, Math.max(max, value));
// }

export class ZoomDirectCommand extends ViscaCommand {
  position: number

  serialize() {
    const buffer = hexToBuffer((16384 / 10) * this.position);
    return Buffer.from([0x80, 0x01, 0x04, 0x47, ...buffer, 0xff])
  }
}
