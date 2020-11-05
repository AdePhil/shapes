import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";
function Octagon({ length: len = 0, strokeWidth = 2, stroke, fill, ...rest }) {
  const length = parseInt(len);
  const viewPortSize = length + strokeWidth * 2;
  const [controls] = useShapeAnimation(length);

  return (
    <svg
      data-testid="octagon"
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-${strokeWidth} -${strokeWidth} ${viewPortSize} ${viewPortSize}`}
    >
      <motion.path
        initial="initial"
        variants={pathVariants}
        animate={controls}
        d={`M  ${length * 0.3} 0, L ${length * 0.7} 0, L ${length} ${
          length * 0.3
        } , L  ${length} ${length * 0.7}, L ${length * 0.7} ${length} , L ${
          length * 0.3
        } ${length}, L 0 ${length * 0.7} L 0 ${length * 0.3}z`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Octagon;
