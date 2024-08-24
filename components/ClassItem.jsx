const ClassItem = ({ name, location, time }) => {
  return (
    <div className="grid grid-cols-2 items-center gap-2 rounded-md p-2 ring-1 ring-white">
      <p>{name}</p>
      <span className="flex flex-col gap-1">
        <p>{location}</p>
        <div className="h-[1px] w-full bg-white"></div>
        <p className="font-semibold">{time}</p>
      </span>
    </div>
  );
};

export default ClassItem;
