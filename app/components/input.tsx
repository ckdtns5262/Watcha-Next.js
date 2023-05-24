import React from "react";

interface InputProps {
    id : string;
    onChange : any;
    value : string;
    type? : string;
    placeholder : string;
}





const Input:React.FC<InputProps> = ({id, onChange, value, type, placeholder}) => {
    return ( 
    <div className="relative">
        <input
        id={id}
        onChange={onChange}
        value={value}
        className ="block rounded-sm w-full text-md bg-white text-black focus:outline-none appearance-none peer px-6 pt-2"
        placeholder={placeholder}
        />
    </div> 
    );
}
 
export default Input;