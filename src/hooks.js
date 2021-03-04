import { useReducer } from "react";

export const useFlux = () => {
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
