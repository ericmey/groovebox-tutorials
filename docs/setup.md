# Setup

## Runtime

This project currently uses:

- Node.js `24.13.0`
- npm `11.x`

Node version is pinned in:

- `.nvmrc`

## Install

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Default local URL:

```text
http://localhost:3000
```

## Verification Commands

```bash
npm run lint
npm run test
npm run build
```

These should be run before:

- switching machines
- handing work to another Codex session
- creating a checkpoint commit

## Recommended CLI Tools

These are not all required for basic app development, but they materially improve work on this project:

- `poppler`
- `imagemagick`
- `jq`
- `tree`
- `fd`
- `bat`
- `gh`

On macOS with Homebrew:

```bash
brew install poppler imagemagick jq tree fd bat gh
```

## Environment Variables

There are no required environment variables at the moment.

If local environment variables are added later:

- put non-secret defaults or placeholders in `.env.example`
- store machine-local values in `.env.local`
- never commit secrets

## Current Manual Assets

Reference material lives under:

- `docs/reference/seqtrak/`
- `docs/reference/woovebox/`
- `docs/reference/teenage engineering/`

Large installer ZIPs are intentionally excluded from git.
