import React from "react";
import StarRating from "./StarRating";
const Reviews = ({ reviews }) => {
  return (
    <div style={{ width: "30%" }} className="border flex-c space">
      {reviews &&  reviews.map((review) => {
        return (
          <div key={review.id}>
            <div className="flex jcb">
              <h4>{review.name}</h4>
              <StarRating rating={review.rating} />
            </div>
            <div className="flex">
              <div>
                {review.review}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
