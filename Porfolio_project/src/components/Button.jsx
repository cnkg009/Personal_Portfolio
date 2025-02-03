import React from "react";

const Button = ({
  className='',
  children,
  onClick,
  type = "button",
  disabled = false,
  ...rest
}) => {
  // Default button classes with hover, active, and focus effects
  const buttonClasses = `
    px-6 py-3 
    font-medium 
    rounded-lg 
    transition-all 
    duration-200 
    ease-in-out 
    bg-black 
    text-blue-500
    hover:bg-blue-700
    hover:font-medium
    cursor-pointer
    hover:text-black
    active:bg-blue-800 
    focus:outline-none 
    focus:ring-blue-500 
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  return (
    <button
      className={`${buttonClasses}  ${className} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
