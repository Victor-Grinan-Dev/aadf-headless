import React from "react";
import ClipCard from "./reusables/ClipCard";

const Content = () => {
  return (
    <div className="forum-content">
      <div className="forum-content_filterBar">filter bar</div>
      <div className="forum-content_conversations">
        <div className="forum-content_conversations--topics">
          <ClipCard color="blue" title="subject 1" />
          <ClipCard color="red" title="subject 2" />
          <ClipCard color="green" title="subject 3" />
        </div>
        <div className="forum-content_conversations--latest">
          <div className="card forum-content_conversations--latest-item">
            latest-item
          </div>
          <div className="card forum-content_conversations--latest-item">
            latest-item
          </div>
          <div className="card forum-content_conversations--latest-item">
            latest-item
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
