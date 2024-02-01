import { useDispatch, useSelector } from "react-redux";
import { setCount } from "./store";

export function RemoteComp() {
  const count = useSelector<{ count: number }, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="mfe-container">
      <h1>Microfrontend</h1>
      <div className="card">
        <button onClick={() => dispatch(setCount(count + 1))}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default RemoteComp;
