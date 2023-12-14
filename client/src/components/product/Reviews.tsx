import React from 'react';
import Star from './Star';
import EmptyStar from './EmptyStar';
import Stars from './Stars';
interface ChildProps {
    reviews: {
        stars: string;
        amount: string;
        questions: string;
    };
}
const Reviews: React.FC<ChildProps> = ({ reviews }) => {
    return <div className="review-field">
        <span className="reviews review-score">{reviews.stars}</span>
        <div className="reviews review-stars"><Stars stars={Math.floor(Number(reviews.stars))} /></div>
        <span className="reviews review-amount special-details">{reviews.amount} ratings</span>
        <span className='reviews'>|</span>
        <span className="reviews review-questions special-details">{reviews.questions} answered questions</span>
    </div>;
};

export default Reviews;