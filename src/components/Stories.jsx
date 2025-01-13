import React from "react";
import useStories from "../hooks/useStories";

// CSS
import "../styles/Stories.css";

function Stories() {
  const stories = useStories();

  return (
    <div className="Block" id="stories">
      <p className="heading section">
        Success Stories from <span>Our Clients</span>
      </p>
      <p className="desc block">
        Explore the firsthand experiences of those who chose to partner with us and witness the transformative power of our innovative solutions.
      </p>

      <div className="stories">
        {stories.map((story, index) => (
          <div className="story" key={index}>
            <div className="story-flex">
              <img src={story.img} alt={`${story.name}'s story`} />
              <p>{story.name}</p>
            </div>
            <span>{story.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;