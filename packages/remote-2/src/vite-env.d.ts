/// <reference types="vite/client" />

declare module "remote/*" {
  function setCount(number: number): void;
}
