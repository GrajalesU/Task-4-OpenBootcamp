import React, { useState, useEffect } from "react";

const Square = () => {
  const [clicks, setClicks] = useState(0);
  const [colors, setColors] = useState([0, 0, 0]);
  const [animation, setAnimation] = useState(undefined);

  const handleColorChange = () => {
    const newR = Math.random() * 255;
    const newG = Math.random() * 255;
    const newB = Math.random() * 255;

    setColors([newR, newG, newB]);
  };

  const handleHover = () => {
    const hover = setInterval(handleColorChange, 2000);
    setAnimation(hover);
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleLeave = () => {
    animation && clearInterval(animation);
    animation && setAnimation(undefined);
    setClicks(0);
  };

  useEffect(() => {
    if (clicks == 2) {
      handleLeave();
    }
  }, [clicks]);
  return (
    <div
      className="Square"
      style={{
        backgroundColor: `rgb(${colors[0]},${colors[1]},${colors[2]})`,
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    />
  );
};

export default Square;
