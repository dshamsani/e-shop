import type { FC } from "react";
import Image from "next/future/image";

interface IProductDetailMobileInfoImage {
  image: {
    id: string;
    filename_downoload: string;
  };
}

const ProductDetailMobileInfoImage: FC<IProductDetailMobileInfoImage> = ({ image }) => {
  const imageLink = process.env.NEXT_PUBLIC_ASSETS;

  const { id, filename_downoload } = image;

  return (
    <div className="miw-w-full flex flex-col items-center mb-10  min-h-[300px]">
      <div className="relative min-w-[350px] min-h-[350px] ">
        <Image src={`${imageLink}${id}/${filename_downoload}`} fill sizes="100%" priority={true} className="object-cover" alt="image" />
      </div>
    </div>
  );
};

export default ProductDetailMobileInfoImage;
