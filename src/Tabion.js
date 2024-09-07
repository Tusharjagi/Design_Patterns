import React from "react";
import Icon from "./Icon";

const TabionContext = React.createContext();

export function Tabion({ children }) {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className="tabion">
      <TabionContext.Provider value={{ toggle, setToggle }}>
        {children}
      </TabionContext.Provider>
    </div>
  );
}

function Toggle() {
  const { toggle, setToggle } = React.useContext(TabionContext);
  return (
    <button className="icon-btn" onClick={() => setToggle(!toggle)}>
      <Icon />
    </button>
  );
}

function List({ children }) {
  const { toggle } = React.useContext(TabionContext);
  return toggle && <div className="tabion-list">{children}</div>;
}

function Item({ children }) {
  return <li className="tabion-item">{children}</li>;
}

Tabion.Toggle = Toggle;
Tabion.List = List;
Tabion.Item = Item;
