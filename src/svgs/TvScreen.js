import * as React from "react";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";
import useShapeAnimation from "../Hooks/useShapeAnimation";
function TvScreen({ length: len = 0, strokeWidth = 2, stroke, fill, ...rest }) {
  const length = parseInt(len);
  const curveSize = 20;
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
        d={`M 0 0  C ${curveSize} -${curveSize}, ${length} -${curveSize}, ${length} 0 C ${
          length + curveSize
        } ${curveSize}, ${length + curveSize} ${
          length * 0.6 - curveSize
        }, ${length} ${length * 0.6} C ${length - curveSize} ${
          length * 0.6 + curveSize
        }, ${curveSize} ${length * 0.6 + curveSize}, 0 ${
          length * 0.6
        }  C ${-curveSize} ${
          length * 0.6 - curveSize
        }, ${-curveSize}  ${curveSize}, 0 0`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default TvScreen;
