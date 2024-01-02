


import React, { useState } from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

/**
 * FormInput Component
 * @param {string} type - The type of input field (e.g., text, password, date).
 * @param {string} placeholder - Placeholder text for the input field.
 * @param {function} onChange - Handler function for the `onChange` event of the input field.
 * @param {string} value - Value to be displayed in the input field.
 * @returns {JSX.Element} - Form input field with optional show/hide password button.
 */
const FormInput = ({ type, placeholder, onChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);
  if (type === "date") {
    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          min="1970-01-01"
          max={new Date().toISOString().split("T")[0]}
          pattern="^\d{4}$"
          className="w-full font-mont text-[15px] border-[#B5B5B5] border-2 rounded-xl p-3"
          required
          onChange={onChange}
          value={value}
        />
      </>
    );
  }
  if (type === "password") {
    return (
      <div className="flex flex-row items-center justify-center w-full">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full font-mont text-[15px] border-[#B5B5B5] border-2 border-r-0 rounded-l-xl p-3 "
          required
          onChange={onChange}
          value={value}
        />
        <button
          className="border-[#B5B5B5] border-2 border-l-0 rounded-r-xl p-3 h-full"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiFillEyeInvisible className="text-[#011526]" size={22} />
          ) : (
            <AiFillEye className="text-[#011526]" size={22} />
          )}
        </button>
      </div>
    );
  } else {
    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full font-mont text-[15px] border-[#B5B5B5] border-2 rounded-xl p-3"
          required
          onChange={onChange}
          value={value}
        />
      </>
    );
  }
};

export default FormInput;
