import React from "react"

const Card = ({ name, link, description, disabled = false }) => (
  <div className={`Card ${disabled ? "Card--disabled" : ""}`}>
    <h4>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </h4>
    <p>{description}</p>
  </div>
)

export default Card
