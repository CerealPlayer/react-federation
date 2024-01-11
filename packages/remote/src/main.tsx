import css from "./index.css?inline";
import { RemoteComp } from "./App";
import { Root, createRoot } from "react-dom/client";

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

      const style = document.createElement("style");
      style.textContent = css;

      this._shadowRoot.append(style);
      this.render();
    }

    get reactProps() {
      return this._reactProps;
    }

    set reactProps(props: any) {
      this._reactProps = props;
      this.render();
    }

    render() {
      if (!this._shadowRoot) return;
      const props = {
        ...this.reactProps,
        mountNode: this._shadowRoot,
      };

      if (this._reactRoot) {
        this._reactRoot.render(RemoteComp(props));
      } else {
        this._reactRoot = createRoot(this._shadowRoot);
        this._reactRoot.render(RemoteComp(props));
      }
    }
  }

  customElements.define("remote-mfe", WebComponent);
}
