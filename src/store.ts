import { createContext } from "react";

const initialState = {
  firstName: "ashish",
  lastName: "shetty",
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
