import React from "react";
import Container from "../Elements/Container";
import { services } from "../../constant";
import { blur2 } from "../../assets";

const ServicesSection = () => {
  return (
    <div className="relative">
      <Container classname={"mt-20"}>
        <div className="py-16 text-center md:text-end">
          <p className="italic text-md text-white">Layanan kami</p>
          <h1 className="text-4xl text-white font-bold">OUR SERVICES</h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center xl:gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="flex flex-col text-white border-2 rounded-2xl p-6"
            >
              <img src={item.icon} alt={item.title} className="w-16" />
              <div className="p-4">
                <h2 className="font-bold text-2xl my-4">{item.title}</h2>
                <p className="text-justify text-sm">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <img src={blur2} className="absolute right-0 top-0 -z-10" alt="" />
    </div>
  );
};

export default ServicesSection;
