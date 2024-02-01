import css from "./index.css?inline";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
const RemoteComp = React.lazy(() => import("./App"));
import type { Root } from "react-dom/client";

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

      const styleSheet = new CSSStyleSheet();
      styleSheet.replaceSync(css);

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
        this._reactRoot = ReactDOM.createRoot(this._shadowRoot);
        this._reactRoot.render(
          <Suspense fallback="Loading">
            <RemoteComp {...props} />
          </Suspense>
        );
      }
    }
  }

  customElements.define("remote-2-mfe", WebComponent);
}
