import React from "react";
import { NavLink } from "react-router-dom";
import But from "./Top_menu.module.css";

export default function Top_menu() {
  return (
    <men class={But.menu}>
      <NavLink to="/hello" class={But.btn}>
        Hello
      </NavLink>
      <NavLink class={But.btn}>Reply</NavLink>
      <NavLink class={But.btn}>Forward</NavLink>
      <NavLink class={But.btn}>Markd Unread</NavLink>
      <NavLink class={But.btn}>Trash</NavLink>
    </men>
  );
}
