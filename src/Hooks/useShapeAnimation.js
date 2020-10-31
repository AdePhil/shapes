import * as React from "react";
import { useAnimation } from "framer-motion";

const useShapeAnimation = (length) => {
  const controls = useAnimation();

  React.useEffect(() => {
    if (!length) return;
    controls.set("initial");
    controls.start("animate");
  }, [controls, length]);

  return controls;
};

export default useShapeAnimation;
