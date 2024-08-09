const StepCard = ({
  iconClasses,
  title,
  first,
  spanText,
  last,
  buttonText,
}) => {
  return (
    <div className="px-4 py-4 relative">
      <i className={`${iconClasses} fa-solid fa-bullhorn text-3xl mb-4`}></i>
      <p className="font-bold mb-5">{title}</p>
      <p className="text-sm text-gray-700 text-justify mb-16">
        {first}
        <span className="font-bold">{spanText}</span>
        {last}
      </p>
      <button className="px-7 py-2 border text-blue-700 border-blue-700 font-bold rounded-md hover:bg-[#3F63C8] hover:text-white absolute bottom-0">
        {buttonText}
      </button>
    </div>
  );
};

export default StepCard;
