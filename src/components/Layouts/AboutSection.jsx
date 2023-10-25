import Container from "../Elements/Container";
import { plus, about, blur } from "../../assets";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { mouseEnter, mouseLeave } from "../../redux/slices/cursorSlices";

const AboutSection = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <Container>
        <div className="py-16 text-center md:text-start">
          <p className="italic text-md text-white">Tentang Kami</p>
          <h1 className="text-4xl text-white font-bold">ABOUT US</h1>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="hidden md:flex flex-col justify-between gap-24 ">
            <div className="w-2 h-[40vh] bg-gray-500 rounded-2xl ml-3" />
            <motion.div whileHover={{ rotate: 90 }}>
              <img src={plus} alt="Start" />
            </motion.div>
          </div>
          <div className="max-w-md mb-8 md:mb-0">
            <h1 className="text-white font-bold text-5xl mb-5">
              Welcome To
              <br />
              CodeElder,
            </h1>
            <p className="text-white text-wrap">
              where innovation meets expertise. Based in the heart of West
              Borneo, our dynamic team consists of five young, talented,
              passionate individuals, each excelling in the world of web
              development. We pride ourselves on our expertise in utilizing the
              latest technologies and trends to create modern and impactful web
              solutions.
            </p>
          </div>
          <img
            src={about}
            alt="about code elder"
            onMouseEnter={() => dispatch(mouseEnter())}
            onMouseLeave={() => dispatch(mouseLeave())}
          />
          <div className="hidden md:flex flex-col justify-between gap-24">
            <motion.div whileHover={{ rotate: 90 }}>
              <img src={plus} alt="Start" />
            </motion.div>
            <div className="w-2 h-[40vh] bg-gray-500 rounded-2xl ml-3" />
          </div>
        </div>
      </Container>
      <img
        src={blur}
        alt="blur svg"
        className="absolute bottom-0 left-0 -z-10"
      />
    </div>
  );
};

export default AboutSection;
