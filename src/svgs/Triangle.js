import * as React from "react";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";
import useShapeAnimation from "../Hooks/useShapeAnimation";

function Triangle({ length: len = 0, strokeWidth = 2, fill, ...rest }) {
  const length = parseInt(len);
  const viewPortSize = length + strokeWidth * 2;
  const controls = useShapeAnimation(length);

  if (!length) return null;

  return (
    <svg
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-${strokeWidth} -${strokeWidth} ${viewPortSize} ${viewPortSize}`}
    >
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate={controls}
        d={`M ${length / 2}  0 L ${length} ${length} H 0 L ${length / 2} 0`}
        stroke="black"
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Triangle;
