//ControlCommand, ControlCommands, ViscaInquiryCommand, InquiryCommands,

import { ViscaDevice, ViscaCommands, InquiryCommands } from "./src/index";

const device = new ViscaDevice("192.168.1.28");

device.on('message', (...args) => console.log('message', ...args));

device.on('connected', async () => {
  // console.log('connected');


  // const cmd = new ViscaCommands.ZoomDirectCommand();
  // cmd.position = 10;
  // const res1 = await device.sendCommand(cmd);
  // console.log(res1);

});

(async function () {
  device.connect();

  setTimeout(async () => {
    const inq = new InquiryCommands.PanTiltPositionCommand()

    console.log(inq.serialize());

    const res1 = await device.sendCommand(inq);
    console.log(res1);
  }, 1000);

  
  setTimeout(() => {
    const cmd = new ViscaCommands.PanTiltDirectDriveCommand();
    cmd.panSpeed = 24;
    cmd.tiltSpeed = 24;
    cmd.panPosition = 1000;
    cmd.tiltPosition = 0;

    device.sendCommand(cmd);
  }, 200);

  // console.log('2');
})();
