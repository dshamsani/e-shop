import Link from "next/link";
import type { FC } from "react";
import Image from "next/future/image";

interface IHomePageMobileMainBlogImage {
  slug: string;
  image: {
    id: string;
    filename_downoload: string;
  };
}

const HomePageMobileMainBlogImage: FC<IHomePageMobileMainBlogImage> = ({ slug, image }) => {
  const imageLink = process.env.NEXT_PUBLIC_ASSETS;

  const { id, filename_downoload } = image;

  return (
    <Link href={`/blog/${slug}`}>
      <div className=" !relative max-w-[1200px] w-full max-h-[600px] ">
        <Image
          src={`${imageLink}${id}/${filename_downoload}`}
          fill
          sizes="100%, 100%"
          priority={true}
          className="object-fill !static"
          alt={"image"}
        />
      </div>
    </Link>
  );
};

export default HomePageMobileMainBlogImage;
