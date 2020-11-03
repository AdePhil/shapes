import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
function Trapezoid({
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
      viewBox={`-${strokeWidth} -${strokeWidth} ${viewPortSize} ${
        viewPortSize * 0.5
      }`}
    >
      <path
        ref={pathRef}
        d={`M 0 ${length / 2} L ${length * 0.2} 0 L ${
          length * 0.8
        } 0 L ${length} ${length / 2}  L 0 ${length / 2}`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Trapezoid;
