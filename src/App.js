//import cx from "classnames";
import React, { useReducer } from "react";

const useUILogic = () => {
  const initialState = {
    likes: 100,
    isBtnLiked: false
  };

  const reducer = (state, action) => {
    switch (action) {
      case "like":
        return { ...state, likes: state.likes + 1, isBtnLiked: true };
      case "dislike":
        return { ...state, likes: state.likes - 1, isBtnLiked: false };
      default:
        throw new Error("Invalid reducer action");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const like = () => dispatch("like");

  const dislike = () => dispatch("dislike");

  return {
    commands: { like, dislike },
    queries: { ...state }
  };
};

const LikeButton = () => {
  const {
    commands: { like, dislike },
    queries: { isBtnLiked, likes }
  } = useUILogic();

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
      <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                        min-width: 150px;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                        border: 2px solid #1565c0;
                   }
            `}</style>
    </>
  );
};

export default LikeButton;
