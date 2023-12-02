import React, { Suspense, lazy } from "react";
// import 하르방춘식 from "../../../assets/images/하르방춘식.png";

const Chunsik = lazy(() => import("./components/Chunsik"));

export default function Proxy() {
  return (
    <div className="proxy">
      <h3>🐌 Proxy Pattern</h3>
      <br />
      <h3>가상 프록시</h3>
      <p>객체 생성을 필요한 시점까지 지연시켜 메모리의 낭비를 줄여준다.</p>
      <Suspense fallback={"로딩중..."}>
        <Chunsik />
      </Suspense>
      <h3>원격 프록시</h3>
      <p>
        원격 객체에 대한 접근을 마치 로컬 객체를 통해서 접근하는 것처럼 할 수
        있다.
      </p>
    </div>
  );
}
