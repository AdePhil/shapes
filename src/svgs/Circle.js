import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";

function Circle({ length: len = 0, stroke, strokeWidth = 2, fill, ...rest }) {
  const length = parseInt(len);
  const viewPortSize = length + 4;
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
        id="path"
        ref={pathRef}
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
