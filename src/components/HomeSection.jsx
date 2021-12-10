import React from "react";

export default function HomeSection(props) {
  return (
    <div className="feature-item">
      <img src={props.icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{props.itemTitle}</h3>
      <p>{props.description}</p>
    </div>
  );
}
