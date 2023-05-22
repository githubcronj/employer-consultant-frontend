import React from "react";

const InputComponent = ({type ,value ,onchange ,placeholder , icon}) => {
   
    return(
        <div className="relative">
        <div className="absolute left-3 top-4 w-5 h-5 px-2 py-2 ml-2 mt-2" >
        {icon}
      </div>
       <div className="border
         border-gray-400 w-0 h-7 absolute top-5 left-16">
        </div>
        <input className={`bg-transparent text-black rounded-2xl h-16 w-96 font-semibold
         py-2 px-4 border
         border-gray-400 pl-20` }
         type={type} value={value} onChange={onchange} placeholder={placeholder}/>
         
        </div>
    )
}
export default InputComponent;