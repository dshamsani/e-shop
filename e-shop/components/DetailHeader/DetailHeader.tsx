import type { FC } from "react";
import { memo } from "react";

interface IBlogDetailHeader {
  name: string;
}

const DetailHeader: FC<IBlogDetailHeader> = memo(function DetailHeader({ name }) {
  return (
    <div className="bg-blogDetailHeader max-w-[100vw] max-h-[260px] p-20 w-full h-full flex items-center justify-center">
      <span className="text-white text-[42px] text-center font-Lexon">{name}</span>
    </div>
  );
});

export default DetailHeader;
