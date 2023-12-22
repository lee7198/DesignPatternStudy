import React from "react";

interface Mediator_ {
  addUser(user: Colleague): void;
  deleteUser(user: Colleague): void;
  sendMessage(message: string, user: Colleague): void;
}

class ConcreteMediator implements Mediator_ {
  private users: Colleague[] = [];

  public ConcreteMediator() {
    this.users = [];
  }

  addUser(user: Colleague): void {
    this.users.push(user);
    console.log(`[SYSTEM]${user.name}님이 입장하셨습니다.`);
  }
  deleteUser(user: Colleague): void {
    this.users = this.users.filter((u) => u.name !== user.name);
    console.log(`[SYSTEM]${user.name}님이 퇴장하셨습니다.`);
  }
  sendMessage(message: string, user: Colleague): void {
    this.users.forEach((item) => {
      if (item !== user) item.receive(message);
    });
  }
}

abstract class Colleague {
  public mediator: Mediator_ | undefined = undefined;
  public name: string = "";

  constructor(mediator: Mediator_, name: string) {
    this.mediator = mediator;
    this.name = name;
  }

  public abstract send(message: string): void;
  public abstract receive(message: string): void;
}

class ConcreteColleague extends Colleague {
  constructor(mediator: Mediator_, name: string) {
    super(mediator, name);
  }

  receive(msg: string) {
    console.log(`수신 > ${this.name} : ${msg}`);
  }

  send(msg: string) {
    console.log(`발신 > ${this.name} : ${msg}`);
    this.mediator?.sendMessage(msg, this);
  }
}

export default function Mediator() {
  const mediator: Mediator_ = new ConcreteMediator();

  const user1: Colleague = new ConcreteColleague(mediator, "user1");
  const user2: Colleague = new ConcreteColleague(mediator, "user2");
  const user3: Colleague = new ConcreteColleague(mediator, "user3");
  const user4: Colleague = new ConcreteColleague(mediator, "user4");

  mediator.addUser(user1);
  mediator.addUser(user2);
  mediator.addUser(user3);
  mediator.addUser(user4);

  user1.send("안녕하세요");

  mediator.deleteUser(user3);

  return <div>index</div>;
}
