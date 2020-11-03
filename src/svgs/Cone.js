import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
function Cone({ length: len = 0, strokeWidth = 2, stroke, fill, ...rest }) {
  const length = parseInt(len);
  const curveSize = 45;
  const viewPortSize = length + strokeWidth * 2 + curveSize;
  const [pathRef] = useShapeAnimation(length);

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
      <path
        ref={pathRef}
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
