import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";

function Circle({ length: len = 0, stroke, strokeWidth = 2, fill, ...rest }) {
  const length = parseInt(len);
  const viewPortSize = length + 4;
  const [controls] = useShapeAnimation(length);
  const svgRef = React.useRef();

  if (!length) return null;

  return (
    <svg
      ref={svgRef}
      data-testid="circle"
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-${strokeWidth} -${strokeWidth} ${viewPortSize} ${viewPortSize}`}
    >
      <motion.path
        initial="initial"
        variants={pathVariants}
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
