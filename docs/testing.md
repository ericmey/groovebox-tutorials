# Testing

## Current Test Strategy

This project should maintain tests as the product evolves rather than adding them later.

Current automated coverage focuses on:

- device data integrity
- tutorial-step references
- basic UI behavior for the demo step-selection flow

## Commands

Run unit tests:

```bash
npm run test
```

Run linting:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## Current Scope

The existing tests are intentionally narrow, because the product is still in foundation mode.

As more functionality is added, test coverage should expand to include:

- control highlighting logic
- lesson rendering rules
- device-schema validation
- content-loading behavior
- future audio/sample metadata handling where relevant
