import { CREATE_MESSAGE } from "./types";

// Create Msg

export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};
