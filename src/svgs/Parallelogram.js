import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
function Parallelogram({
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
        d={`M  ${length * 0.25} 0, L ${length} 0, L ${
          length * 0.75
        } ${length} , L  0 ${length}z`}
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

// polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);

export default Parallelogram;
