import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-[100px] items-center min-h-[15vh]">
        <img src="https://mattfarley.ca/img/favicon-32.p" alt="logo" />
        <div>
          <button className="px-4 py-2 border-0 rounded-full">Projects</button>
          <button className="px-4 py-2 border-2 ml-2 rounded-full border-[rgb(110,7,243)]"> Resume </button>
        </div>
      </div>
    </>
  );
};

export default Header;
