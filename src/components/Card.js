const Card = ({ topic }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full mt-10">
      <img
        src={topic.img}
        alt="Mountain"
        className="w-full h-32 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl roboto-bold mb-2">{topic.title}</h2>
        <p className="roboto-regular leading-tight mb-4">{topic.description}</p>
      </div>
    </div>
  );
};

export default Card;
