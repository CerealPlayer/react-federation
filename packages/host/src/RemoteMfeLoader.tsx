import { useEffect, useRef } from "react";
import { registerMFE } from "remote/App";

registerMFE();

export function RemoteMfeLoader() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    customElements.whenDefined("remote-mfe").then(() => {
      const customEl: any = document.createElement("remote-mfe");
      customEl.reactProps = { from: "host" };
      ref.current?.append(customEl);
    });
  }, []);
  return <div ref={ref}></div>;
}
