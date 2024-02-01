import { FormEventHandler } from "react";

declare global {
  interface Window {
    _remote_methods: {
      setCount(value: number): void;
    };
  }
}

export function RemoteComp() {
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    if (!window._remote_methods || !window._remote_methods.setCount) return;
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get("value");
    if (!value) return;
    window._remote_methods.setCount(parseInt(value.toString()));
  };

  return (
    <div className="mfe-container">
      <h1>Microfrontend 2</h1>
      <div className="card">
        <form onSubmit={submitHandler}>
          <input name="value" type="number" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RemoteComp;
