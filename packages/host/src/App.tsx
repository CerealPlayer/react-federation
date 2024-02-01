import { useEffect, useState, version } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RemoteMfeLoader } from "./RemoteMfeLoader";
import { Remote2MfeLoader } from "./Remote2MfeLoader";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("from host " + version);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
      <Remote2MfeLoader />
    </>
  );
}

export default App;
