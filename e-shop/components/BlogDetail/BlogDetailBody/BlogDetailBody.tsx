import type { FC } from "react";
import { memo } from "react";
import Image from "next/future/image";
import type { IBlogDetail } from "../BlogDetail";
import parse from "html-react-parser";

const BlogDetailBody: FC<IBlogDetail> = memo(function BlogDetailBody({ blog }) {
  const imageLink = process.env.NEXT_PUBLIC_ASSETS;

  const { description, image, short_description } = blog;

  return (
    <div className="max-w-[1200px] w-full pb-[30px]  bg-white">
      <div className="relative inline-block  min-w-[200px] max-w-[1200px] w-full h-full   ">
        <Image
          src={`${imageLink}${image.id}/${image.filename_downoload}`}
          fill
          sizes="100%"
          priority={true}
          className="object-contain w-full h-full !relative"
          alt={image.filename_downoload ? image.filename_downoload : "image"}
        />
      </div>
      <div className="max-w-[960px] my-0 mx-auto py-0 px-4 text-[18px] pt-[25px] [&_span]:pb-[25px]">
        <span className="text-[24px] leading-6  font-DraftE font-light mb-[25px]">{short_description}</span>
        <div className="[&_p]:font-DraftE [&_p]:font-normal [&_p]:pb-[25px]">{parse(description)}</div>
      </div>
    </div>
  );
});

export default BlogDetailBody;
