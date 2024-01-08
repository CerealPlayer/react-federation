import css from "./index.css?inline";
import RemoteComp from "./App";
import root from "react-shadow"

export function Remote() {
  return (
    <root.div>
      <style>{css}</style>
      <RemoteComp />
    </root.div>
  );
}
