import { createContext, useReducer } from "react";

const DEFAULT_GAME = {
  game: null,
  questions: [],
};

export const GameContext = createContext();

export const GAME_ACTION_TYPES = {
  PLAY: "GAME/PLAY",
};

const gameReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GAME_ACTION_TYPES.PLAY:
      return {
        ...state,
        game: payload.game,
        questions: payload.questions,
      };
    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, DEFAULT_GAME);
  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
