export default interface IProductDetailItem {
  id: number;
  slug: string;
  name: string;
  category: {
    category_id: number;
    category_name: string;
    slug: string;
  };
  discription: string;
  price: number;
  quantity: string;
  image: {
    id: string;
    filename_downoload: string;
  };
}
