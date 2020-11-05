import * as React from "react";

import useShapeAnimation from "../Hooks/useShapeAnimation";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";
function Plus({ length: len = 0, strokeWidth = 2, stroke, fill, ...rest }) {
  const length = parseInt(len);
  const viewPortSize = length + strokeWidth * 2;
  const [controls] = useShapeAnimation(length);

  if (!length) return null;

  return (
    <svg
      data-testid="plus"
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-${strokeWidth} -${strokeWidth} ${viewPortSize} ${viewPortSize}`}
    >
      <motion.path
        initial="initial"
        variants={pathVariants}
        animate={controls}
        d={`M ${length * 0.1}  ${length * 0.25} L ${length * 0.35} ${
          length * 0.25
        } L ${length * 0.35} 0, L ${length * 0.65} 0, L ${length * 0.65} ${
          length * 0.25
        }, L ${length * 0.9} ${length * 0.25}, L ${length * 0.9} ${
          length * 0.5
        } L ${length * 0.65} ${length * 0.5}, L ${length * 0.65} ${length}, L ${
          length * 0.35
        } ${length}, L ${length * 0.35} ${length * 0.5}, L ${length * 0.1} ${
          length * 0.5
        }z`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Plus;
