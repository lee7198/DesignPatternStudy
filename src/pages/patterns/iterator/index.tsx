import React from "react";
import "./index.css";

export default function Iterator() {
  const 경부고속도로 = ["서울", "대전", "대구", "부산"];

  return (
    <div className="iterator">
      <h3>👽 Iterator Pattern</h3>
      <br />
      <h5>경부고속도로</h5>
      <div className="korea">
        {경부고속도로.map((item) => (
          // next로 요소 반환
          <div key={item} className="locate">
            {item}
          </div>
          // 마지막 idx에서 done으로 중단
        ))}
      </div>
    </div>
  );
}
