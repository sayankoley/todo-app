import React from "react";

const colors = [
  "rgba(255, 255, 255, 0.15)",
  "rgba(0, 255, 255, 0.1)",
  "rgba(255, 182, 193, 0.15)",  // light pink
  "rgba(173, 216, 230, 0.15)",  // light blue
  "rgba(144, 238, 144, 0.15)",  // light green
  "rgba(255, 255, 0, 0.15)",    // light yellow
];

 const BubbleBackground = () => {
  const bubbles = Array.from({ length: 100 }).map((_, i) => {
    const size = Math.random() * 25 + 10; // 10px - 35px
    const left = Math.random() * 100;     // 0% - 100%
    const duration = Math.random() * 15 + 15; // 15s - 30s
    const color = colors[Math.floor(Math.random() * colors.length)];

    const style = {
      "--bubble-size": `${size}px`,
      "--bubble-left": `${left}%`,
      "--bubble-duration": `${duration}s`,
      "--bubble-color": color,
    };

    return <span key={i} className="bubble" style={style}></span>;
  });

  return <div className="bubble-background">{bubbles}</div>;
};
export default React.memo(BubbleBackground);
