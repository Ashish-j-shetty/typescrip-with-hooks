import CustomHookcomponent from "./CustomHookComponent";
import TestComponent from "./MoreReactComponents";
import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import { UseReducerComponent } from "./UseReducerComponent";
import { UseRefComponent } from "./UseRefComponent";

import UseStateComponent from "./UseStateComponent";

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />

      <h1>useEffect</h1>
      <UseEffectComponent />

      <h1>useContext</h1>
      <UseContextComponent />

      <h1>useReducer</h1>
      <UseReducerComponent />

      <h1>useRef</h1>
      <UseRefComponent />
      <h1>use custom hook </h1>
      <CustomHookcomponent />

      <h1>MoreReactComponents</h1>
      <TestComponent />
    </div>
  );
}

export default App;
