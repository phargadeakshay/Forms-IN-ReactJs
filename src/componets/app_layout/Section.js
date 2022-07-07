import React from "react";
import Sec from "./Section.module.css";
export default function Section() {
  return (
    <section class={Sec.section1}>
      <div class={Sec.econtent}>Email 1</div>
      <div class={Sec.econtent}>Email 2</div>
      <div class={Sec.econtent}>Email 3</div>
      <div class={Sec.econtent}>Email 3</div>
      <div class={Sec.econtent}>Email 3</div>
    </section>
  );
}
