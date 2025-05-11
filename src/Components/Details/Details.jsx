
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/bookData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setService(found);
      });
  }, [id]);

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
          <p className="mt-4"> <strong>Description:</strong> {service.description || "No description available."}</p>
          <p> <strong>Features:</strong>{service.features}</p>
          <p> <strong>Subscription benefits: </strong> {service.subscription_benefits}</p>
          <p> <strong>Ratings: </strong> {service.ratings}</p>
          <p><strong>Reviews:</strong>{service.number_of_reviews}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
