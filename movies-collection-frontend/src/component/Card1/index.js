import React from "react";

const Card1 = ({items}) => {
  return (
    <div className="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
      <div
        className="w-64 h-64 bg-contain bg-center rounded"
        style={{ backgroundImage: `url(${items?.imageSrc})` }}
      ></div>
      <div className="flex flex-col items-center mt-6">
        <span className="uppercase font-bold tracking-widest text-xs text-teal-800">
          {items?.position}
        </span>
        <span className="mt-1 text-xl font-medium text-teal-900">
          {items?.name}
        </span>
        <div className="mt-6 flex">
          {" "}
          {items?.links.map((link, linkIndex) => (
            <a key={linkIndex} className="mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300" href={link.url}>
              <link.icon className="fill-current w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card1;
