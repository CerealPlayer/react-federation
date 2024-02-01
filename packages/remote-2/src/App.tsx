import { FormEventHandler } from "react";
import { setCount } from "remote/count";

export function RemoteComp() {
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get("value");
    if (!value) return;
    setCount(parseInt(value.toString()));
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
