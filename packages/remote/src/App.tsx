import { useEffect, useState, version } from "react";

export function RemoteComp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("from react " + version);
  }, []);

  return (
    <div className="mfe-container">
      <h1>Microfrontend</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default RemoteComp;
