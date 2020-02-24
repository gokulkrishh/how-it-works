import React from "react";
import { Link } from "gatsby";

const Card = ({ name, link, description, disabled = false }) => (
  <li className={`Card ${disabled ? "Card--disabled" : ""}`}>
    <Link to={link}>{name}</Link>
  </li>
);

export default Card;
