import React from "react";
import Button from "./components/Button";
import "./index.css";

export default function Component() {
  return (
    <div>
      <h3>🧢 Component Pattern</h3>
      <p>스스로 동작하는 독립적인 개체임</p>
      <div className="button_container">
        <Button text="✋ 내 버튼" />
        <Button text="🫵 니 버튼" />
      </div>
    </div>
  );
}
