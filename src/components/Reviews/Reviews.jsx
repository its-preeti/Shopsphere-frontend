import { useState } from "react";
import "./Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      name: "Rahul",
      rating: 5,
      comment: "Amazing Product 🔥",
    },
  ]);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name,
      rating,
      comment,
    };

    setReviews([...reviews, newReview]);

    setName("");
    setRating(5);
    setComment("");
  };

  const avgRating =
    reviews.reduce((acc, item) => acc + item.rating, 0) /
    reviews.length;

  return (
    <div className="reviews">

      <h2>
        ⭐ {avgRating.toFixed(1)} / 5
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
        />

        <select
          value={rating}
          onChange={(e) =>
            setRating(Number(e.target.value))
          }
        >
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <textarea
          placeholder="Write Review"
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
          required
        />

        <button type="submit">
          Add Review
        </button>
      </form>

      <div className="review-list">
        {reviews.map((review, index) => (
          <div
            className="review-card"
            key={index}
          >
            <h3>{review.name}</h3>

            <p>
              {"⭐".repeat(review.rating)}
            </p>

            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;