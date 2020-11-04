import * as React from "react";
import { useAnimation } from "framer-motion";

const useShapeAnimation = (length) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.set("initial");
    controls.start("animate").then(() => {
      const path = document.querySelector("path");
      if (!path) return;
      path.removeAttribute("stroke-dasharray");
      path.removeAttribute("stroke-dashoffset");
    });
  }, [controls, length]);

  return [controls];
};

export default useShapeAnimation;
