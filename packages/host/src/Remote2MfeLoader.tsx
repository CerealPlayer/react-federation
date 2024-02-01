import { useEffect, useRef } from "react";
import { registerMFE } from "remote-2/App";

registerMFE();

export function Remote2MfeLoader() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    customElements.whenDefined("remote-2-mfe").then(() => {
      const customEl: any = document.createElement("remote-2-mfe");
      customEl.reactProps = { from: "host" };
      ref.current?.append(customEl);
    });
  }, []);
  return <div ref={ref}></div>;
}
