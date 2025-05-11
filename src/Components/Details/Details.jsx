import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]); // Store submitted reviews
  const [reviewInput, setReviewInput] = useState("");
  const [ratingInput, setRatingInput] = useState("");

  useEffect(() => {
    fetch("/bookData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setService(found);
      });
  }, [id]);

  const handleReviewSubmit = () => {
    const rating = parseInt(ratingInput);
    if (!reviewInput || isNaN(rating) || rating < 1 || rating > 5) {
      alert("Please enter a valid review and a rating between 1 to 5.");
      return;
    }

    const newReview = {
      text: reviewInput,
      rating: rating,
    };

    setReviews([...reviews, newReview]);
    setReviewInput("");
    setRatingInput("");
  };

  if (!service) return <div className="text-center mt-12">Loading...</div>;

  return (
    <section className="my-16 px-4 md:px-12 max-w-4xl mx-auto">
      <div className="card bg-base-100 shadow-xl border p-6">
        <figure>
          <img
            src={service.thumbnail}
            alt={service.name}
            className="w-full max-h-[300px] object-cover rounded"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">{service.name}</h2>
          <p><strong>Tech Category:</strong> {service.tech_category}</p>
          <p><strong>Price:</strong> ${service.price}</p>
          <p><strong>Frequency:</strong> {service.frequency}</p>
          <p className="mt-4"><strong>Description:</strong> {service.description || "No description available."}</p>
          <p><strong>Features:</strong> {service.features}</p>
          <p><strong>Subscription benefits:</strong> {service.subscription_benefits}</p>
          <p><strong>Ratings:</strong> {service.ratings}</p>
          <p><strong>Reviews:</strong> {service.number_of_reviews}</p>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-10 p-6 bg-gray-100 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Add a Review</h3>
        <textarea
          className="textarea textarea-bordered w-full mb-3"
          placeholder="Write your review here..."
          value={reviewInput}
          onChange={(e) => setReviewInput(e.target.value)}
        ></textarea>
        <input
          type="number"
          className="input input-bordered w-full mb-3"
          placeholder="Rating (1-5)"
          value={ratingInput}
          onChange={(e) => setRatingInput(e.target.value)}
          min="1"
          max="5"
        />
        <button className="btn bg-green-800 text-white" onClick={handleReviewSubmit}>
          Submit Review
        </button>

        {/* Display Reviews */}
        {reviews.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">User Reviews:</h4>
            <ul className="space-y-3">
              {reviews.map((r, index) => (
                <li key={index} className="border p-3 rounded bg-white shadow">
                  <p><strong>Rating:</strong> {r.rating}/5</p>
                  <p>{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Details;
