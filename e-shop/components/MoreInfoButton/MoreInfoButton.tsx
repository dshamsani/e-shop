import type { FC } from "react";
import { memo } from "react";

interface IMoreInfoButton {
  text: string;
  className?: string;
}

const MoreInfoButton: FC<IMoreInfoButton> = memo(function MoreInfoButton({ text = "Dozvědět se více", className }) {
  return <span className={`${className ? className : ""} font-DraftE text-[16px] text-ugoGreen self-end  hover:cursor-pointer`}>{text}</span>;
});

export default MoreInfoButton;
