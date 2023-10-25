import { logo, plus, hero, arrowRight } from "../../assets";
import { motion } from "framer-motion";
import MouseCursor from "../Elements/MouseCursor";
import FrameMagnetic from "../Elements/FrameMagnetic";
import { useDispatch } from "react-redux";
import { mouseEnter, mouseLeave } from "../../redux/slices/cursorSlices";

const HeroSection = (props) => {
  const { isScrolled } = props;
  const dispatch = useDispatch();

  const toggleOverflow = () => {
    const section = document.getElementById("about");
    section.scrollIntoView({ behavior: "smooth" });
  };

  document.body.style.overflow = isScrolled ? "auto" : "hidden";

  return (
    <div className="px-10 py-10 md:px-20 md:py-10 h-screen">
      <MouseCursor />
      <nav className="flex justify-between">
        <img src={logo} alt="CodeElder" />
        <motion.div whileHover={{ rotate: 90 }}>
          <img src={plus} alt="Start" />
        </motion.div>
      </nav>
      <div className="flex justify-between items-center h-5/6">
        <div className="w-2 h-1/2 bg-gray-500 rounded-2xl ml-3" />
        <img
          src={hero}
          alt="CodeElder"
          className="w-[600px]"
          onMouseEnter={() => dispatch(mouseEnter())}
          onMouseLeave={() => dispatch(mouseLeave())}
        />
        <div className="w-2 h-1/2 bg-gray-500 rounded-2xl mr-3" />
      </div>
      <nav className="flex justify-between">
        <motion.div whileHover={{ rotate: 90 }}>
          <img src={plus} alt="Start" />
        </motion.div>
        <FrameMagnetic>
          <button
            className="bg-primary text-white py-2 px-4 rounded-full flex gap-2 items-center hover:scale-110"
            onClick={toggleOverflow}
          >
            Getting start <img src={arrowRight} alt="" />
          </button>
        </FrameMagnetic>
      </nav>
    </div>
  );
};

export default HeroSection;
