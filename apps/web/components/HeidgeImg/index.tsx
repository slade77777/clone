import { FC, memo } from "react";
import { createSVG } from "./svg-templates";

const HeidgeImg: FC<{
  width?: number;
  color?: string;
  maxWidth?: string;
  imgURL?: string;
  className?: string;
}> = ({ width, color, maxWidth, imgURL, className }) => {
  return (
    <div
      className={""}
      dangerouslySetInnerHTML={createSVG(width, color, maxWidth, className)}
    />
  );
};

export default memo(HeidgeImg);
