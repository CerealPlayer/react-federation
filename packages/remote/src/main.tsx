import css from "./index.css?inline";
<<<<<<< Updated upstream
import { RemoteComp } from "./App";
import { Root, createRoot } from "react-dom/client";
=======
import React, { Suspense } from "react";
const RemoteComp = React.lazy(() => import("./App"));
import type { Root } from "react-dom/client";
>>>>>>> Stashed changes

export function registerMFE() {
  class WebComponent extends HTMLElement {
    private _reactProps: object | null = {};
    private _shadowRoot: ShadowRoot | null = null;
    private _reactRoot: Root | null = null;
    constructor() {
      super();
    }

    connectedCallback() {
      this._shadowRoot = this.attachShadow({ mode: "open" });

<<<<<<< Updated upstream
      const style = document.createElement("style");
      style.textContent = css;
=======
      const styleSheet = new CSSStyleSheet();
      styleSheet.replaceSync(css);
>>>>>>> Stashed changes

      this._shadowRoot.adoptedStyleSheets = [styleSheet];
      this.render();
    }

    get reactProps() {
      return this._reactProps;
    }

    set reactProps(props: any) {
      this._reactProps = props;
      this.render();
    }

    async render() {
      if (!this._shadowRoot) return;
      const props = {
        ...this.reactProps,
        mountNode: this._shadowRoot,
      };

      if (this._reactRoot) {
        this._reactRoot.render(
          <Suspense fallback="Loading">
            <RemoteComp {...props} />
          </Suspense>
        );
      } else {
        const ReactDOM = await import("react-dom/client");
        this._reactRoot = ReactDOM.createRoot(this._shadowRoot);
        this._reactRoot.render(
          <Suspense fallback="Loading">
            <RemoteComp {...props} />
          </Suspense>
        );
      }
    }
  }

  customElements.define("remote-mfe", WebComponent);
}
