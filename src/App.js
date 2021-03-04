import React from "react";
import { useFlux } from "./hooks";

const LikeButton = () => {
  const {
    commands: { like, dislike },
    queries: { isBtnLiked, likes }
  } = useFlux();

  return (
    <>
      <button
        onClick={isBtnLiked ? dislike : like}
        className={`like-button ${isBtnLiked ? "liked" : null}`}
      >
        <h2>
          {isBtnLiked ? "Liked" : "Like"} | {likes}
        </h2>
      </button>
    </>
  );
};

export default LikeButton;
