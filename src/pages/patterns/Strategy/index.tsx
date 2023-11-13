import React, { useState } from "react";

interface 점심먹기 {
  먹기(): string;
}

class 공대학식 implements 점심먹기 {
  public 먹기 = () => "바비든든 김치찌개";
}

class 구바학식 implements 점심먹기 {
  먹기 = () => "구바 치돈";
}
class 계대생 {
  식당: undefined | 점심먹기 = undefined;
  constructor(식당_?: undefined | 점심먹기) {
    if (식당_ === undefined) return;

    this.식당 = 식당_;
    console.log(this.식당);
  }
}

export default function Strategy() {
  const [대학생, set대학생] = useState<계대생>(new 계대생());

  // let 대학생 = new 계대생();
  const 공식: 점심먹기 = new 공대학식();
  const 구바: 점심먹기 = new 구바학식();

  return (
    <>
      <h3>🤔 Strategy</h3>
      {대학생.식당 === undefined ? (
        <p>대학생이 배가고픕니다 어떤 식당으로 갈까요?</p>
      ) : (
        <p>
          대학생이 <b>{대학생.식당.먹기()}</b>를 맛있게 먹습니다.
        </p>
      )}
      <br />
      <button onClick={() => set대학생(new 계대생(공식))}>공대식당</button>
      &nbsp;
      <button onClick={() => set대학생(new 계대생(구바))}>구바학식</button>
    </>
  );
}
