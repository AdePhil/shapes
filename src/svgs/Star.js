import * as React from "react";
import useShapeAnimation from "../Hooks/useShapeAnimation";
import { motion } from "framer-motion";
import { pathVariants } from "../animations";

function Star({ length: len = 0, stroke, strokeWidth = 2, fill, ...rest }) {
  const calcStarPoints = (
    centerX,
    centerY,
    innerCirclePoints,
    innerRadius,
    outerRadius
  ) => {
    const angle = Math.PI / innerCirclePoints;
    const angleOffsetToCenterStar = 45;

    const totalPoints = innerCirclePoints * 2; // 10 in a 5-points star
    let points = "M";
    for (let i = 0; i < totalPoints; i++) {
      let isEvenIndex = i % 2 === 0;
      let r = isEvenIndex ? outerRadius : innerRadius;
      let currX = centerX + Math.cos(i * angle + angleOffsetToCenterStar) * r;
      let currY = centerY + Math.sin(i * angle + angleOffsetToCenterStar) * r;
      points += currX + "," + currY + " ";
    }
    points += "z";
    return points;
  };

  const getStarPoints = () => {
    let centerX = length / 2;
    let centerY = length;
    let innerCirclePoints = 5;

    let innerRadius = length / innerCirclePoints;
    let innerOuterRadiusRatio = 2;
    let outerRadius = innerRadius * innerOuterRadiusRatio;

    return calcStarPoints(
      centerX,
      centerY,
      innerCirclePoints,
      innerRadius,
      outerRadius
    );
  };

  const length = parseInt(len);
  const xviewPortSize = length + 4;
  const yviewPortSize = 2 * length + 4;
  const [controls] = useShapeAnimation(length);

  if (!length) return null;

  const points = getStarPoints();

  return (
    <svg
      {...rest}
      width={`${length}px`}
      height={`${2 * length}px`}
      viewBox={`-2 -2 ${xviewPortSize} ${yviewPortSize}`}
    >
      <motion.path
        initial="initial"
        variants={pathVariants}
        animate={controls}
        d={points}
        stroke={stroke}
        fill={fill}
        strokeWidth={2}
      />
    </svg>
  );
}

export default Star;
