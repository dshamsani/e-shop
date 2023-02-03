import Link from "next/link";
import type { FC } from "react";
import Image from "next/future/image";

interface IHomePageBlogMainBlogImage {
  slug: string;
  image: {
    id: string;
    filename_downoload: string;
  };
}

const HomePageBlogMainBlogImage: FC<IHomePageBlogMainBlogImage> = ({ slug, image }) => {
  const imageLink = process.env.NEXT_PUBLIC_ASSETS;

  const { id, filename_downoload } = image;

  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className="relative  max-w-[1200px] w-full min-h-[600px] max-h-[600px]  hover:cursor-pointer">
          <Image src={`${imageLink}${id}/${filename_downoload}`} fill sizes="100%" priority={true} className="object-cover" alt={"image"} />
        </div>
      </a>
    </Link>
  );
};

export default HomePageBlogMainBlogImage;
