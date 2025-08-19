import React from "react";
import clsx from "clsx";

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "", style }) => (
  <div
    className={clsx(
      "animate-pulse bg-[#23232A] rounded-md",
      className
    )}
    style={style}
  />
);

export default Skeleton;
