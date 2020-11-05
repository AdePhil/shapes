import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";

function Star({ length: len = 0, stroke, strokeWidth = 2, fill, ...rest }) {
  const length = parseInt(len);
  const viewPortSize = length + strokeWidth * 2;
  const [controls] = useShapeAnimation(length);

  if (!length) return null;

  return (
    <svg
      data-testid="star"
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-${strokeWidth} -${strokeWidth} ${viewPortSize} ${viewPortSize}`}
    >
      <motion.path
        initial="initial"
        variants={pathVariants}
        animate={controls}
        d={`M ${length * 0.5} 0, L ${length * 0.61} ${length * 0.35}, L ${
          length * 0.98
        } ${length * 0.35}, L ${length * 0.68} ${length * 0.57}, L ${
          length * 0.79
        } ${length * 0.91}, L ${length * 0.5} ${length * 0.7}, L ${
          length * 0.21
        } ${length * 0.91}, L ${length * 0.32} ${length * 0.57}, L ${
          length * 0.1
        } ${length * 0.35} , L ${length * 0.39} ${length * 0.35}z`}
        stroke={stroke}
        fill={fill}
        strokeWidth={2}
      />
    </svg>
  );
}

export default Star;
