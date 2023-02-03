import type { FC } from "react";

interface IProductDetailMobileInfoDescription {
  discription: string;
  quantity: string;
}

const ProductDetailMobileInfoDescription: FC<IProductDetailMobileInfoDescription> = ({ discription, quantity }) => {
  return (
    <div className="flex flex-col items-center mb-10 min-h-full">
      <p className="px-8 text-black text-[13px] whitespace-pre-wrap  self-start font-normal leading-6 ">{discription}</p>
      <p className="px-8 shrink font-sans text-md text-left min-w-full ">{quantity}</p>
    </div>
  );
};

export default ProductDetailMobileInfoDescription;
