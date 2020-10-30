import * as React from "react";

function SvgCarretGray({ fill, ...rest }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 9.001 7" {...rest}>
      <path
        d="M7.827 0a1.221 1.221 0 01.59.139 1 1 0 01.433 1.428L5.506 6.512a.9.9 0 01-.393.349 1.342 1.342 0 01-.9.1 1.3 1.3 0 01-.747-.487l-3.3-4.91A.937.937 0 01.366.31 1.048 1.048 0 011.14 0z"
        fill={fill || '"#70727a"'}
      />
    </svg>
  );
}

export default SvgCarretGray;
