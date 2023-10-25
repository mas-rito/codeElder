"use client";
import { useSelector } from "react-redux";
import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";

const MouseCursor = (props) => {
  const { size = 40, hoverSize = 400 } = props;
  const isHover = useSelector((state) => state.cursor.data[0].isHover);
  const { cursorX, cursorY } = useMousePosition();
  const cursorSize = isHover ? hoverSize : size;
  return (
    <motion.div
      className="kursor z-50"
      animate={{
        top: cursorY - cursorSize / 2,
        left: cursorX - cursorSize / 2,
        width: cursorSize,
        height: cursorSize,
      }}
      transition={{ type: "tween", ease: "backOut" }}
    />
  );
};

export default MouseCursor;
