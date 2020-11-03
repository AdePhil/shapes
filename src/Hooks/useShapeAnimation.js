import * as React from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin.min";

gsap.registerPlugin(DrawSVGPlugin);

const useShapeAnimation = (length) => {
  const pathRef = React.useRef();
  const tl = gsap.timeline({ onComplete: function () {} });

  React.useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    tl.set(path, { drawSVG: "0% 0%", opacity: 0 });
    tl.to(path, 2, { drawSVG: "100% 0", opacity: 1, delay: 0.4 });
  }, [tl, length]);

  return [pathRef];
};

export default useShapeAnimation;
