import React from "react";

const ClipCard = (props) => {
  const { title, color } = props;
  return (
    <div
      className="card clipped-card"
      style={{ borderTop: `solid 20px ${color || "blue"} ` }}
    >
      <div className="clipped-card_clip">
        <div className="clipped-card_clip-outer">X</div>
        <div className="clipped-card_clip-inner">Icon</div>
      </div>

      {title && <h2 className="clipped-card-title">{title}</h2>}
    </div>
  );
};

export default ClipCard;
