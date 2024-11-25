const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <img
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
        alt="Mountain"
        className="w-full h-32 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl roboto-bold mb-2">Beautiful Mountain View</h2>
        <p className="roboto-regular leading-tight mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
          sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex at
          turpis rutrum viverra.
        </p>
      </div>
    </div>
  );
};

export default Card;
