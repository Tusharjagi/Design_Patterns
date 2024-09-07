import React from "react";
import "./App.css";
import { TabionMenu } from "./TabionMenu";

const sources = [
  "https://images.pexels.com/photos/939478/pexels-photo-939478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1692984/pexels-photo-1692984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/162829/squirrel-sciurus-vulgaris-major-mammal-mindfulness-162829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

function Image({ source }) {
  return (
    <div className="image-item App">
      <img src={source} alt="images" />
      <TabionMenu />
    </div>
  );
}

export default function App() {
  return sources.map((img, i) => <Image source={img} key={i} />);
}
