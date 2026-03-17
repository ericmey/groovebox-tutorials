# Groovebox Tutorials

Reference-first tutorial system for grooveboxes and related music devices.

R1 is focused on the Yamaha SEQTRAK, but the repository is being structured as a reusable multi-device learning platform.

## Current Status

- App foundation: `Next.js + React + TypeScript`
- Current device target: `Yamaha SEQTRAK`
- Current emphasis: device anatomy rendering, tutorial engine structure, and documentation-first architecture

## Repository Goals

- teach device workflows accurately
- reduce learning friction for beginners
- support reusable tutorial patterns across multiple devices
- replace brittle screenshot pipelines with a semantic CSS-rendered device layer

## Important Docs

- [Architecture](/Users/ericmey/Projects/groovebox-tutorials/docs/architecture.md)
- [Testing](/Users/ericmey/Projects/groovebox-tutorials/docs/testing.md)
- [Setup](/Users/ericmey/Projects/groovebox-tutorials/docs/setup.md)
- [Handoff](/Users/ericmey/Projects/groovebox-tutorials/docs/handoff.md)
- [Project Scope](/Users/ericmey/Projects/groovebox-tutorials/docs/notes/project-scope-r1.md)
- [Implementation Plan](/Users/ericmey/Projects/groovebox-tutorials/docs/notes/implementation-plan-r1.md)

## Requirements

- Node.js `24.13.0`
- npm `11.x`

Recommended CLI tools are listed in [docs/setup.md](/Users/ericmey/Projects/groovebox-tutorials/docs/setup.md).

## Getting Started

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Verification

Run all standard checks before handoff or commit:

```bash
npm run lint
npm run test
npm run build
```

## Current App Structure

- `app/` route-level application code
- `components/` shared UI components
- `content/devices/` device-specific tutorial and geometry data
- `lib/` shared types and helpers
- `docs/` project documentation and handoff notes

## Multi-Machine Workflow

This repository is intended to move cleanly between desktop and laptop development.

Required habits:

- do not leave important state only in chat
- update docs when architectural direction changes
- keep handoff notes current when stopping mid-task
- run verification before switching machines
- commit and push checkpoints frequently
