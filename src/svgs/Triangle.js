import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";

function Triangle({ length: len = 0, stroke, strokeWidth = 2, fill, ...rest }) {
  const length = parseInt(len);
  const viewPortSize = length + strokeWidth * 2;
  const [controls] = useShapeAnimation(length);

  if (!length) return null;

  return (
    <svg
      data-testid="triangle"
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-${strokeWidth} -${strokeWidth} ${viewPortSize} ${viewPortSize}`}
    >
      <motion.path
        initial="initial"
        variants={pathVariants}
        animate={controls}
        d={`M ${length / 2}  0 L ${length} ${length} H 0 L ${length / 2} 0`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Triangle;
