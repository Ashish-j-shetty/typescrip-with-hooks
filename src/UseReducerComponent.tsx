import { useReducer } from "react";

const initialState = {
  counter: 100,
};

type ActionTypes =
  | { type: "INCREMENT"; payload: number }
  | {
      type: "DECREMENT";
      payload: number;
    };

function counterReducer(state: typeof initialState, action: ActionTypes) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      throw new Error("No cases matched");
  }
}

export function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      {state.counter}

      <div>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
          Increment
        </button>
        |
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
          Decrement
        </button>
      </div>
    </div>
  );
}
