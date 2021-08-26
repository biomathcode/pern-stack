import React, {useState} from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const AddReviews = () => {
    const {id} = useParams();
    const [name, setName] = useState("")
    const [rating, setRating] = useState("Review Rating");
    const [reviewText, setReviewText] = useState("")

  const handleAddReview = async (e) => {
      e.preventDefault();
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
          name, 
          review: reviewText,
          rating
      })

      console.log(response)
  }

  return (
    <div className="flex-c space">
    <div className="flex jcb space">
    <div className="field flex-c">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
            </div>
      <div className="field flex-c">
        <label>Rating</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option disabled>Review Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

    </div>
        
      <div className="field flex-c">
          <label>Review</label>
          <textarea id="Review" value={reviewText} onChange={(e)=> setReviewText(e.target.value)} ></textarea>
      </div>
      <div>
          <button onClick={handleAddReview}>Submit</button>
      </div>

    </div>
  );
};

export default AddReviews;
