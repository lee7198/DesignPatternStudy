import React from "react";

abstract class Handler {
  private nextHandler: Handler | undefined = undefined;

  public handleRequest(app: App) {
    this.handle(app);
    if (this.nextHandler !== undefined) {
      this.nextHandler.handleRequest(app);
    }
  }

  protected abstract handle(app: App): void;

  public setNextHandler(nextHandler: Handler) {
    this.nextHandler = nextHandler;
    return nextHandler;
  }
}

class A extends Handler {
  protected override handle(app: App): void {
    if (app.getA() === undefined) {
      console.log("A");
      app.setA(this);
    }
  }
}

class B extends Handler {
  protected override handle(app: App): void {
    if (app.getB() === undefined) {
      console.log("B");
      app.setB(this);
    }
  }
}

class C extends Handler {
  protected override handle(app: App): void {
    if (app.getC() === undefined) {
      console.log("C");
      app.setC(this);
    }
  }
}

class App {
  private a: A | undefined = undefined;
  private b: B | undefined = undefined;
  private c: C | undefined = undefined;

  public getA(): A | undefined {
    if (this.a) return this.a;
  }

  public getB(): B | undefined {
    if (this.b) return this.b;
  }

  public getC(): C | undefined {
    if (this.c) return this.c;
  }

  public makeApp() {
    const handler: Handler = new A();
    // 체이닝
    handler.setNextHandler(new B()).setNextHandler(new C());
    handler.handleRequest(this);
  }

  public setA(a: A) {
    this.a = a;
    return this;
  }
  public setB(b: B) {
    this.b = b;
    return this;
  }
  public setC(c: C) {
    this.c = c;
    return this;
  }
}

export default function ChainOfResponsibility() {
  const run = () => {
    const app = new App();
    app.makeApp();
  };

  const run2 = () => {
    const app = new App();
    app.setA(new A()).setB(new B()).makeApp();
  };

  return (
    <div>
      <button onClick={run}>MakeApp</button>
      &nbsp;
      <button onClick={run2}>MakeApp2</button>
    </div>
  );
}
