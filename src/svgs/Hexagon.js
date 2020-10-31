import * as React from "react";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";
import useShapeAnimation from "../Hooks/useShapeAnimation";

function Hexagon({ length: len = 2, fill, strokeWidth = 2, ...rest }) {
  const length = parseInt(len);
  const xviewPortSize = length + 4;
  const yviewPortSize = 2 * length + 4;
  const controls = useShapeAnimation(length);

  if (!length) return null;
  return (
    <svg
      {...rest}
      width={`${length}px`}
      height={`${2 * length}px`}
      viewBox={`-2 -2 ${xviewPortSize} ${yviewPortSize}`}
    >
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate={controls}
        d={`M 0 ${length / 2} L ${length / 2} 0 L ${length} ${
          length / 2
        }  L ${length} ${length} L ${length / 2} ${
          length + length * 0.5
        } L 0 ${length} L 0 ${length / 2}`}
        stroke="black"
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Hexagon;
