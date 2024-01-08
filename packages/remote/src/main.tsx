import css from "./index.css?inline";
import RemoteComp from "./App";

export function Remote() {
  return (
    <>
      <style>{css}</style>
      <RemoteComp />
    </>
  );
}
