import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";
function Cone({ length: len = 0, strokeWidth = 2, stroke, fill, ...rest }) {
  const length = parseInt(len);
  const curveSize = 45;
  const viewPortSize = length + strokeWidth * 2 + curveSize;
  const [controls] = useShapeAnimation(length);

  if (!length) return null;

  return (
    <svg
      data-testid="cone"
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-${strokeWidth + curveSize} -${
        strokeWidth + curveSize
      } ${viewPortSize} ${viewPortSize}`}
    >
      <motion.path
        initial="initial"
        variants={pathVariants}
        animate={controls}
        d={`M 0 0  C ${curveSize} -${curveSize}, ${length} -${curveSize}, ${length} 0 L ${
          length / 2
        } ${length} L 0 0`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Cone;
