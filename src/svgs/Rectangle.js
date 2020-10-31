import * as React from "react";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";
import useShapeAnimation from "../Hooks/useShapeAnimation";

function Rectangle({
  length: len = 0,
  strokeWidth = 2,
  stroke,
  fill,
  ...rest
}) {
  const length = parseInt(len);
  const xViewPortSize = length + strokeWidth * 2;
  const yViewPortSize = length * 0.5 + strokeWidth * 2;
  const controls = useShapeAnimation(length);

  if (!length) return null;

  return (
    <svg
      {...rest}
      width={`${length}px`}
      height={`${length / 2}px`}
      viewBox={`-${strokeWidth} -${strokeWidth} ${xViewPortSize} ${yViewPortSize}`}
    >
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate={controls}
        d={`M 0 0 H ${length} V ${length / 2} H 0 L 0 0`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Rectangle;
