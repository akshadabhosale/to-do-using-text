import React from "react";
import { BsChevronBarDown } from "react-icons/bs";


export default function Accordian({
  title,
  description,
  isShow,
  index,
  expandAccordian,
}) {
  const showDescrition = isShow ? (
    <div className="bg-white w-full text-wrap text-black text-sm">
      <p className="p-2 mt-1"> {description}</p>
    </div>
  ) : null;

  const handleClick = () => {
    expandAccordian(index);
  };

  return (
    <div
      className="flex flex-col text-left rounded-lg border-solid border-2 mt-4 "
      onClick={handleClick}
    >
      <div className="flex place-items-center w-full bg-slate-200 text-wrap text-blue-700 shadow-xl text-xl" style={{justifyContent:'space-between'}}>
        <h2 className="p-2 flex-2 px-3 ">{title}</h2>
        <div className="place-content-end mr-2 ">
        <BsChevronBarDown/>
        </div>
      </div>
      {showDescrition}
    </div>
  );
}
