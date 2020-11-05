import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";

function Hexagon({ length: len = 2, fill, stroke, strokeWidth = 2, ...rest }) {
  const length = parseInt(len);
  const viewPortSize = length + 4;
  const [controls] = useShapeAnimation(length);

  return (
    <svg
      data-testid="hexagon"
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-2 -2 ${viewPortSize} ${viewPortSize}`}
    >
      <motion.path
        initial="initial"
        variants={pathVariants}
        animate={controls}
        d={`M ${length * 0.25} 0, L ${length * 0.75} 0, L ${length} ${
          length * 0.5
        }, L ${length * 0.75} ${length}, L ${length * 0.25} ${length}, L 0 ${
          length * 0.5
        }z`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
// 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%

export default Hexagon;
