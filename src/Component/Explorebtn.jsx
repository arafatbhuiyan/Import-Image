import React from 'react';
import { GoArrowRight } from "react-icons/go";

function btn(){
    alert("This section is empty for now")
}

const Explorebtn = () => {
    return (
        <div>
            <button onClick={btn} className='flex items-center gap-2 cursor-pointer mb-[185px]'>Explore page <GoArrowRight /></button>
        </div>
    );
};

export default Explorebtn;