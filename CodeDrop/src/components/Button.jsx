import React from 'react'

function Button({ className, size = "default", children, ...props }) {

  const baseClasses = "cursor-pointer relative overflow-hidden font-medium rounded-md border border-solid border-border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"

  const buttonSize = {
    default: "text-base px-6 py-2",
    sm: "text-sm px-4 py-2",
    lg: "text-md px-8 py-4",
  }

  const buttonClass = `${baseClasses} ${buttonSize[size]} ${className}`;

  return (
    <button
      className={buttonClass} {...props}
    >{children}</button>
  )

}

export default Button;