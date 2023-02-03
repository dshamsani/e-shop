export interface IProductitem {
  id: number;
  category: {
    category_id: number;
    category_name: string;
    slug: string;
  };
  slug: string;
  name: string;
  discription: string;
  price: number;
  quantity: string;
  image: {
    id: string;
    filename_downoload: string;
  };
}
