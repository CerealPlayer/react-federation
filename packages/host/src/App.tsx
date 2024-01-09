import { useEffect, useState, version } from "react";
import "./App.css";
import { RemoteMfeLoader } from "./RemoteMfeLoader";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("from react " + version);
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setOpen((prev) => !prev)}>
          Mfe is {open ? "open" : "not open"}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {open && <RemoteMfeLoader />}
    </>
  );
}

export default App;
