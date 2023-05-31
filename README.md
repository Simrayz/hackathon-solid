# Hackathon with SolidStart

This project is implemented with SolidJS, powered by [`solid-start`](https://start.solidjs.com)

The scope of the project is currently unknown, but the following technologies are to be used:

* [Auth.JS](https://authjs.dev/) for session based authentication
* [TailwindCSS](https://tailwindcss.com/) for inline css styling
* [Vitest](https://vitest.dev/) for unit tests
* [Zod](https://zod.dev/) for environment and schema validation
* (Maybe) [Kobalte](https://kobalte.dev/docs/core/overview/introduction) component library for SolidJS

## Developing

Install dependencies with `pnpm install`, and start the development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `pnpm run build` will generate a Node app that you can run with `pnpm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.

## Resources

* [Good example REPO with auth](https://github.com/lordnox/solid-start-starter/tree/main)
* [Component Party](https://component-party.dev/) to compare SolidJS syntax with React (select on the top)