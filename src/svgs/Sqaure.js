import * as React from "react";

function Rectangle({ length, fill, ...rest }) {
  return (
    <svg {...rest} width={`${length}px`} height={`${length}px`}>
      <rect x="0" y="0" width={`${length}`} height={`${length}`} fill={fill} />
    </svg>
  );
}

export default Rectangle;
