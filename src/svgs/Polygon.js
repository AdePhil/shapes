import * as React from "react";

function Polygon({ length, fill, ...rest }) {
  return (
    // <svg {...rest} width={`${length}px`} height={`${length / 2}px`}>
    //   <rect
    //     x="0"
    //     y="0"
    //     width={`${length}`}
    //     height={`${length / 2}`}
    //     fill={fill}
    //   />
    // </svg>
    <svg>
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
    </svg>
  );
}

export default Polygon;
