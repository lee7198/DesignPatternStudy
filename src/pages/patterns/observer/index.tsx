import React, { useState } from "react";

export default function Observer() {
  // subject
  const [dance, setDance] = useState(false);

  // update()
  const dancing = () => setDance(true);
  const stopDancing = () => setDance(false);

  return (
    <>
      <h3>👀 Observer Pattern</h3>
      <button onClick={dancing}>🕺 춤추기</button>
      <button onClick={stopDancing}>🧍 멈추기</button>
      <br />
      <br />

      {/* observers & update */}
      <div>
        {/* observer object */}
        🕵️ observer: {dance ? "그가 춤을 춥니다" : "그가 춤을 추지 않습니다"}.
        <br />
        {/* light observer object */}
        💡 화려한 조명{dance ? "을 비춥니다" : "을 비추지 않습니다"}.
      </div>
    </>
  );
}
