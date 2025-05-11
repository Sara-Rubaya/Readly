import { useEffect, useState } from "react";
import { Link } from "react-router";


const Services = () => {
  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch data once when component mounts
    fetch("/bookData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className=" p-10 md:px-14 w-2/3 mx-auto">
      <h2 className="text-5xl font-bold mb-6 text-center text-green-800">Subscription Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
        {displayedServices.map((service) => (
          <div
            key={service.id}
            className="card bg-base-100 shadow-xl border hover:shadow-2xl transition"
          >
            <figure>
              <img
                src={service.thumbnail}
                alt={service.name}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p>Tech Category: {service.techCategory}</p>
              <p>Price: ${service.price}</p>
              <p>Frequency: {service.frequency}</p>
              <div className="card-actions justify-end">
                <Link to={`/service/${service.id}`}>
                <a href="#_" class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
    <span class="relative">View more</span>
</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          onClick={() => setShowAll((prev) => !prev)} 
          to="/services"
          className="btn btn-outline  text-white bg-green-800"
        >
          {showAll ? "Show Less" : "Show All"}
        </Link>
      </div>
    </section>
  );
};

export default Services;




