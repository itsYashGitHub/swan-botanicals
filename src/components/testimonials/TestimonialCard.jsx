const TestimonialCard = ({ t }) => {
  return (
    <div className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white border rounded-lg shadow-sm p-4 mx-2 flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-1">
          <p className="font-bold">
            {t.name} <span className="text-secondarySage text-sm">✔ Verified Buyer</span>
          </p>
          <p className="text-sm text-gray-500">{t.date}</p>
        </div>

        <div className="text-yellow-500 mb-1">
          {"★".repeat(t.rating)}
          {"☆".repeat(5 - t.rating)}
        </div>

        <h4 className="font-semibold mb-1">{t.title}</h4>
        <p className="text-sm text-gray-700">{t.review}</p>
      </div>

      <div className="flex items-center mt-4 gap-2">
        <img src={t.image} alt={t.product} className="h-8 w-8 object-contain bg-white" />
        <p className="text-sm text-gray-600">{t.product}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
