import React from 'react';

const Button = ({onClick}) => {
    return (
        <div className=" flex mt-6">
                <button 
                onClick={onClick}
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-lg border rounded-full px-8 py-2 font-bold cursor-pointer bg-[#02111e] text-white hover:bg-[#031b31]">Start now</button>

              </div>
    );
};

export default Button;