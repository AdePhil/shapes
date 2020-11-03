import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
function RightArrow({
  length: len = 0,
  strokeWidth = 2,
  stroke,
  fill,
  ...rest
}) {
  const length = parseInt(len);
  const viewPortSize = length + strokeWidth * 2;
  const [pathRef] = useShapeAnimation(length);

  if (!length) return null;

  return (
    <svg
      {...rest}
      width={`${length}px`}
      height={`${length}px`}
      viewBox={`-${strokeWidth} -${strokeWidth} ${viewPortSize} ${viewPortSize}`}
    >
      <path
        ref={pathRef}
        d={`M  0 ${length * 0.2}, L ${length * 0.6} ${length * 0.2}, L ${
          length * 0.6
        } 0, L  ${length} ${length * 0.5}, L ${length * 0.6} ${length}, L ${
          length * 0.6
        } ${length * 0.8}, L 0 ${length * 0.8}      z`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default RightArrow;
