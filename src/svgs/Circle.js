import * as React from "react";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";
import useShapeAnimation from "../Hooks/useShapeAnimation";
function Circle({ length: len = 0, stroke, strokeWidth = 2, fill, ...rest }) {
  const length = parseInt(len);
  const viewPortSize = length + 4;
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
        strokeWidth={strokeWidth}
        stroke={stroke}
        fill={fill}
        d={`M ${length / 2 - length / 2}, ${length / 2}
          a ${length / 2}, ${length / 2} 0 1, 1 ${length}, 0
          a ${length / 2},${length / 2} 0 1, 1 -${length}, 0
        `}
      />
    </svg>
  );
}

export default Circle;
