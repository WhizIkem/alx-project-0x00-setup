/**
 * Button component
 */

import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`text-white bg-blue-500 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
