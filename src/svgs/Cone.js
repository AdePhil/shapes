import * as React from "react";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";
import useShapeAnimation from "../Hooks/useShapeAnimation";
function Cone({ length: len = 0, strokeWidth = 2, stroke, fill, ...rest }) {
  const length = parseInt(len);
  const curveSize = 45;
  const viewPortSize = length + strokeWidth * 2 + 4 * curveSize;
  const controls = useShapeAnimation(length);

  if (!length) return null;

  return (
    <svg
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-${strokeWidth + curveSize} -${
        strokeWidth + curveSize
      } ${viewPortSize} ${viewPortSize}`}
    >
      <motion.path
        variants={pathVariants}
        initial="initial"
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
