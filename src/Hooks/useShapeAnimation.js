import * as React from "react";
import KUTE from "kute.js";

const useShapeAnimation = (length) => {
  const pathRef = React.useRef();

  React.useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    KUTE.set(path, { drawSVG: "0% 0%", opacity: 0 });
    KUTE.to(path, 2, { drawSVG: "100% 0", opacity: 1, delay: 0.4 });
  }, [length]);

  return [pathRef];
};

export default useShapeAnimation;
