import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"
const Button = ({ color, bgColor, className,toLogin, byGmail, type, children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (toLogin) {
      byGmail(true);
      navigate('/');
    }};
  return (
    <button
      className={className}
      onClick={handleClick}
      type={type}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </button>
  );
};

export default Button;