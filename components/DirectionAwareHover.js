"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const getDirection = (e, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const x = e.clientX - left - width / 2;
  const y = e.clientY - top - height / 2;
  const d = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90) % 4;

  // 0: right, 1: bottom, 2: left, 3: top
  return ["right", "bottom", "left", "top"][d];
};

const getInitial = (direction) => {
  switch (direction) {
    case "top":
      return { y: "-100%", x: "0%" };
    case "bottom":
      return { y: "100%", x: "0%" };
    case "left":
      return { x: "-100%", y: "0%" };
    case "right":
      return { x: "100%", y: "0%" };
    default:
      return {};
  }
};

const DirectionAwareHover = ({ image, title, location }) => {
  const ref = useRef(null);

  const handleEnter = (e, controls) => {
    const dir = getDirection(e, ref.current);
    controls.start({
      ...getInitial(dir),
      opacity: 0,
    });
    controls.start({
      x: "0%",
      y: "0%",
      opacity: 1,
      transition: { duration: 0.4 },
    });
  };

  return (
    <div
      ref={ref}
      className="relative overflow-hidden group cursor-pointer"
      onMouseEnter={(e) => handleEnter(e, controls)}
    >
      <img src={image} className="w-full h-full object-cover" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 0 }}
        whileHover={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.4 },
        }}
        className="absolute inset-0 bg-yellow-500/80 flex flex-col justify-center items-center text-black px-4"
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{location}</p>
      </motion.div>
    </div>
  );
};

export default DirectionAwareHover;
