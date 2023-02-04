import { useReducer } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "multyplay":
      return { count: state.count * 2 };
    case "разделить":
      return { count: state.count / 2 };
  }
}
export const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
//   const [value, setValue] = useState();
//   const inputValue = (event) => {
//     setValue(event.target.value);
//   };
  return (
    <>
      {/* {/* <Input value={value} onChange={inputValue} />  */}
      {state.count} 
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <Button onClick={() => dispatch({ type: "multyplay" })}>*</Button>
      <Button onClick={() => dispatch({ type: "разделить" })}>/</Button>
    </>
  );
};

//     return (
//         <main>
//           <Input />

//           <Button>+</Button>
//           <Button>-</Button>
//           <Button>*</Button>
//           <Button>/</Button>

//           <Input />
//         </main>
//       );

// }
