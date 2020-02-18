import React from "react"
import { Link } from "gatsby"

const Card = ({ name, link, description, disabled = false }) => (
  <div className={`Card ${disabled ? "Card--disabled" : ""}`}>
    <h4>
      <Link to={link}>{name}</Link>
    </h4>
    <p>{description}</p>
  </div>
)

export default Card
