import { useSelector } from "react-redux";

export function Display() {
  // Use the correct slice name when accessing the state
  const { counter } = useSelector((state) => state.Counter);

  return (
    <div>
      <h1>Counter is {counter}</h1>
    </div>
  );
}
//useSelector
//useDispatch
//provider//


