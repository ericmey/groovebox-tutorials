# Workflow

## Development Standard

This repository should behave like a real product codebase, not a disposable prototype.

That means:

- documentation is part of the deliverable
- tests are added as functionality stabilizes
- checkpoints are validated
- unfinished work is recorded explicitly

## Expected Loop

1. Inspect current state
2. Update plan or notes if direction changed
3. Implement a focused slice of work
4. Add or update tests where appropriate
5. Run verification
6. Record handoff details if stopping
7. Commit and push

## Documentation Expectations

Update docs when changing:

- architecture
- setup requirements
- testing approach
- handoff process
- device rendering conventions
- content model conventions

## Testing Expectations

Not every visual tweak needs a new test, but:

- new stateful behavior should be tested
- data-model invariants should be tested
- regression-prone logic should be tested

## Repository Health

A healthy checkpoint should satisfy:

- fresh `npm install` works
- `npm run lint` passes
- `npm run test` passes
- `npm run build` passes
- docs reflect current reality
