# React Microfrontend Example with Vite Federation Plugin

In `/packages` you'll find a host app and a microfrontend called `remote` that exposes a React component wrapped in a web component. The project uses Vite with `@originjs/vite-plugin-federation` to build a remote entry and share libs like React and ReactDOM.

## Start

Clone this project, run `npm install` in the root and then `npm start`. This will use a `turbo` pipeline to execute the "npm run build && npm run preview" command with nodemon in both project's start commands
