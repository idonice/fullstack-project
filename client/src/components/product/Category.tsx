import React from 'react';
import { IProduct } from '../../types';
import ProductCard from './ProductCard';
import data from '../home/data';

const pro: IProduct = {
    productID: 'p-am2023',
    productDetails: {
        description: "Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage; Midnight with AppleCare+ (3 Years)",
        brand: "Apple",
        images: [
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-macbook-air-gold-202002?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1610746650000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-macbook-air-gold-202002_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1610746650000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-macbook-air-gold-202002_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1610746640000',
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-macbook-air-gold-202002_AV5?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1610746646000'
        ]
    },
    reviews: {
        stars: "4.6",
        amount: "4,545",
        questions: "75"
    },
    price: {
        curr: '$',
        whole: 99,
        fraction: 99
    },
    shipping: {
        price: 54.30,
        date: 'Saturday, January 6',
        country: 'Israel'
    },
    colors: [{ color: 'red', img: 'data:image/webp;base64,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' }]
    , modelsID: [{ id: 'p-23x', name: 'Iphone 12' }, { id: 'p-222asa', name: 'Iphone 14' }],
    dealDetails: [
        { title: 'Ships from', content: 'Amazon' },
        { title: 'Sold by', content: 'Dexterifytech US Store' },
        { title: 'Returns', content: 'Returnable until Jan 31, 2024' },
        { title: 'Payment', content: 'Secure transaction' },
    ],
    stock: 2,
    additionalDetails: [
        { title: 'Brand', content: 'Apple' },
        { title: 'Color', content: 'Red' },
    ],
    about: [
        `Compatibility: only for iPhone 15 Pro; doesn't include camera lens protectors or built-in camera lens protector`,
        `Stronger Magnetic Lock: powerful built-in magnets with 1,500 g of holding force enable faster, easier place-and-go wireless charging and a secure lock on any MagSafe accessory`,
        `Adjustable Stash Stand: positioned around camera frame to stay hidden when folded away while keeping MagSafe ring 100% unobstructed; enjoy a freely adjustable and stable view for watching shows whenever, wherever`,
        `Built to Last: robust and durable zinc-alloy construction ensures stand stays looking like new while hinge is lab tested to retain its strength after more than 3,000 uses`
    ]
}

interface ChildProps {
    data: IProduct[];
}
const Category: React.FC<ChildProps> = ({ data }) => {
    return <div className='product-card__list'>
        <h1 className='result-title'>Results</h1>
        {data.map((product) => {
            return <ProductCard data={product} />
        })}
    </div>;
};

export default Category;