import React, { useState } from "react";
import Canvas from "./Canvas";

const colors = [
  {
    id: 1,
    color: "#8E7CC3",
  },

  {
    id: 2,
    color: "#A3AB84",
  },

  {
    id: 3,
    color: "#5f6e78",
  },

  {
    id: 4,
    color: "#F8D5C4",
  },

  {
    id: 5,
    color: "#ff0000",
  },

  {
    id: 6,
    color: "#F1C232",
  },

  {
    id: 7,
    color: "#741B47",
  },
];

const handles = [
  {
    id: 1,
    img: "assets/BK1.jpg",
    name:"BK1"
  },

  {
    id: 2,
    img: "assets/BK2.jpg",
    name:"BK2"
  },

  {
    id: 3,
    img: "assets/BK3.jpg",
    name:"BK3"
  },
  {
    id: 4,
    img: "assets/BO6.jpg",
    name:"BO6"
  },
  {
    id: 5,
    img: "assets/BT13-bis.jpg",
    name:"BT13-bis"
  },
  {
    id: 6,
    img: "assets/PTI1.jpg",
    name:"PTI1"
  },
];

const Menu = () => {
  const [color, setColor] = useState("#ffffff");
  const [handle, setHandle] = useState("");
  return (
    <>
      <div style={{ display: "flex" }}>
        {colors.map((c) => (
          <div
            key={c.id}
            style={{ width: "50px", height: "50px", backgroundColor: c.color }}
            onClick={() => setColor(c.color)}
          ></div>
        ))}
      </div>

      <div style={{ display: "flexbox"}}>
        {handles.map((c) => (
          <img
            key={c.id}
            style={{ width: "50px", height: "50px" }}
            src={c.img}
            alt=""
            onClick={()=> setHandle(c.name)}
          />
        ))}
      </div>

      <Canvas color={color} handle={handle} />
    </>
  );
};

export default Menu;
