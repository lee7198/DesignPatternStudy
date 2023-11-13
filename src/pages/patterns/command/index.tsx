import React from "react";

interface Commander {
  run: () => void;
}

class CommandImpl implements Commander {
  public powerOn = () => {
    throw new Error("Method not implemented.");
  };

  public run = () => {
    this.powerOn();
  };
}

class AirConditionerCommand extends CommandImpl {
  private airconditioner: undefined | AirConditioner;

  super(arg: AirConditioner) {
    this.airconditioner = arg;
  }

  public run = () => {
    if (this.airconditioner) this.airconditioner.powerOn();
  };

  constructor(arg: AirConditioner) {
    super();
    this.airconditioner = arg;
  }
}

class HeaterCommand extends CommandImpl {
  private heater: undefined | Heater;

  super(arg: AirConditioner) {
    this.heater = arg;
  }

  public run = () => {
    if (this.heater) this.heater.powerOn();
  };

  constructor(arg: Heater) {
    super();
    this.heater = arg;
  }
}
class AirConditioner {
  public powerOn = () => {
    alert("에어컨을 켰어요 🤖");
  };
}

class Heater {
  public powerOn = () => {
    alert("히터를 켰어요 🤖");
  };
}

class OkGoogle {
  private command: Commander | undefined;

  public setCommand = (command: Commander) => {
    this.command = command;
  };

  public talk = () => {
    if (this.command) this.command.run();
  };
}

export default function Command() {
  const airConditioner = new AirConditioner();
  const heater = new Heater();

  const airConditionerCommand = new AirConditionerCommand(airConditioner);
  const heaterCommand = new HeaterCommand(heater);

  const googleHome = new OkGoogle();

  const handleAirconditioner = () => {
    googleHome.setCommand(airConditionerCommand);
    googleHome.talk();
  };

  const handleHeater = () => {
    googleHome.setCommand(heaterCommand);
    googleHome.talk();
  };

  return (
    <>
      <h3>🙄 Command</h3>
      <button onClick={handleAirconditioner}>에어컨 켜기</button>
      <button onClick={handleHeater}>히터 켜기</button>
    </>
  );
}
