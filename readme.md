# cypress-multiple-set-cookie-repro

Set up this repo to hopefully showcase a bug with Cypress where it doesn't
respect multiple `set-cookie` response headers and instead only takes the last
one.

Unfortunately, that didn't seem to work. Running this example (see below), shows
the multiple `set-cookie` response headers as expected 🤔.

## Setup

- `bun install`
- In two terminals:
  - `bun run start`
  - `bun run cy`
