import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";
function Diamond({ length: len = 0, strokeWidth = 2, stroke, fill, ...rest }) {
  const length = parseInt(len);
  const viewPortSize = length + strokeWidth * 2;
  const [controls] = useShapeAnimation(length);

  if (!length) return null;

  return (
    <svg
      data-testid="diamond"
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-${strokeWidth} -${strokeWidth} ${viewPortSize} ${viewPortSize}`}
    >
      <motion.path
        initial="initial"
        variants={pathVariants}
        animate={controls}
        d={`M 0 ${length * 0.5} L ${length * 0.5} 0 L ${length} ${
          length * 0.5
        } L ${length * 0.5} ${length} L 0 ${length * 0.5}`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Diamond;
