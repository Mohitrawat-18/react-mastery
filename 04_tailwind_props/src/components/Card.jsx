function Card({ title, description, image, price }) {
  return (
    <div className="w-80 overflow-hidden rounded-2xl bg-white shadow-xl">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

        <p className="mt-2 text-gray-600">{description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">₹{price}</span>

          <button className="rounded-lg bg-blue-500 px-4 py-2 text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
