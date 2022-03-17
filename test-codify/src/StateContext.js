import { createContext } from "react";

const intialState = {
    setPosts: () => null,
};

const StateContext = createContext(intialState);

export default StateContext;