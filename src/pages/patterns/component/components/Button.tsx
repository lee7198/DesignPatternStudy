import React from "react";

export default function Button({ text }: { text: string }) {
  return (
    <button onClick={() => alert(`${text}을 누르셨어용`)} className="myButton">
      {text}
    </button>
  );
}
