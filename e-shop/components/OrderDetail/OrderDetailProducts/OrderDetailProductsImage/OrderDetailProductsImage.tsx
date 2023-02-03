import type { FC } from "react";
import useOrderDetailProducts from "../useOrderDetailProducts";
import Image from "next/future/image";

interface IOrderDetailProductsImage {
  image: {
    id: string;
    filename_downoload: string;
  };
}

const OrderDetailProductsImage: FC<IOrderDetailProductsImage> = ({ image }) => {
  const { imageLink } = useOrderDetailProducts();

  const { id, filename_downoload } = image;

  return (
    <div className={` relative !p-0 min-w-[100px] max-w-[100px] max-h-[100px] min-h-[100px] w-full h-full`}>
      <Image src={`${imageLink}${id}/${filename_downoload}`} fill sizes="100%" priority={true} className="objectfit-contain " alt="image" />
    </div>
  );
};

export default OrderDetailProductsImage;
