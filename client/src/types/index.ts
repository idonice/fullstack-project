export interface IProduct {
  productID: string;
  category: string;
  subcategory: string;
  details: {
    description: string;
    brand: string;
    images: string[];
  };
  reviews: {
    stars: string;
    amount: string;
    questions: string;
  };
  price: {
    curr: string;
    price: number;
  };
  shipping: {
    price: number;
    date: string;
    country: string;
  };
  colors: {
    color: string;
    img: string;
  }[];
  modelsID: { id: string, name: string }[];
  saleDetails: { title: string, content: string }[];
  stock: number;
  specification: { title: string, content: string }[];
  about: string[];
}