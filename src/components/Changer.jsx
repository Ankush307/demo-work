import React, { useEffect, useState } from "react";

const Changer = () => {
  const [bgColor, setBgColor] = useState("green");

  useEffect(() => {
    const colorChanger = setInterval(() => {
      setBgColor(getRandomColor());
    }, 1000);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  const getRandomColor = () => {
    const letters = "123";
    return `#${Array.from({ length: 6 }, () =>
      letters.charAt(Math.floor(Math.random() * letters.length))
    ).join("")}`;
  };

  return <h1 className="text-5xl text-gray-950 font-bold">Hello</h1>;
};

export default Changer;