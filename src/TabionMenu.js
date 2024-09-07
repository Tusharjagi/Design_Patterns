import React from "react";
import { Tabion } from "./Tabion";

export function TabionMenu() {
  return (
    <Tabion>
      <Tabion.Toggle />
      <Tabion.List>
        <Tabion.Item>Edit</Tabion.Item>
        <Tabion.Item>Delete</Tabion.Item>
      </Tabion.List>
    </Tabion>
  );
}
