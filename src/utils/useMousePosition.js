import { useState } from "react";

export default function useMousePosition() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  return {
    cursorX,
    cursorY,
  };
}
