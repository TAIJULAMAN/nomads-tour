import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={` bg-orange-600 text-black rounded-full px-8 py-2 font-medium hover:bg-[#8482FF] hover:text-white transition-all`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
