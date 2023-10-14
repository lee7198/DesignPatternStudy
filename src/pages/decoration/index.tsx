import React, { useState } from "react";

class 초보자 {
  name: string = "";
  public skill_list: string[] = [];

  constructor(skill: string) {
    this.name = "초보자 🧑‍🦲";
    this.skill_list.push(skill);
  }
  setSkills = (skill: string) => {
    this.skill_list.push(skill);
  };
}

class 도적 extends 초보자 {
  constructor(lagacy: 초보자, value: string) {
    super(value);
    lagacy.skill_list.forEach((item) => this.skill_list.push(item));
    this.name = "도적 🥷";
    this.skill_list.reverse();
  }
}

export default function Decoration() {
  const [캐릭터, set캐릭터] = useState<초보자 | 도적>(
    new 초보자("달팽이 던지기")
  );

  const 전직 = () => {
    set캐릭터((prev) => new 도적(prev, "럭키세븐"));
  };
  return (
    <>
      <h3>🎄 Decoration Pattern</h3>
      <div>
        {캐릭터.name} 스킬:
        {캐릭터.skill_list.map((item) => (
          <span key={item}>{item},</span>
        ))}
      </div>
      <br />
      <button onClick={전직}>2차 전직</button>
    </>
  );
}
