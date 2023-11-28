import React from "react";
import ClipCard from "./reusables/ClipCard";
import Banner from "./Banner";

const Content = () => {
  return (
    <div className="forum-content">
      <Banner />
      <div className="forum-content_filterBar">filter bar</div>
      <div className="forum-content_conversations">
        <div className="forum-content_conversations--topics">
          <ClipCard color="blue" title="Topic 1" />
          <ClipCard color="red" title="Topic 2" />
          <ClipCard color="green" title="Topic 3" />
          <ClipCard color="purple" title="Topic 4" />
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
