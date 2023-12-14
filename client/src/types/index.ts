export interface IProduct {
  productID: string;
  productDetails: {
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
    whole: number;
    fraction: number;
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
  dealDetails: { title: string, content: string }[];
  stock: number;
  additionalDetails: { title: string, content: string }[];
  about: string[];
}