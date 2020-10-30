import * as React from "react";

function Circle({ length, fill, ...rest }) {
  return (
    <svg {...rest} width={`${length}px`} height={`${length}px`}>
      <circle
        cx={length / 2}
        cy={length / 2}
        r={length / 2}
        fill={fill}
      ></circle>
    </svg>
  );
}

export default Circle;
