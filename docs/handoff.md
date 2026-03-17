# Handoff

## Goal

This repository should support seamless switching between:

- desktop and laptop
- different Codex sessions
- interrupted work segments

## Required Handoff Checklist

Before stopping work or switching machines:

1. Update any relevant documentation if the architecture or plan changed.
2. Add or update a handoff note in `docs/notes/` if work is mid-stream.
3. Run:

```bash
npm run lint
npm run test
npm run build
```

4. Check `git status`.
5. Commit meaningful work.
6. Push the branch or `main` so the other machine has the real checkpoint.

## Handoff Note Template

Create a dated note like:

- `docs/notes/session-handoff-YYYY-MM-DD.md`

Include:

- current task
- what changed
- what is still wrong or incomplete
- exact next step
- any commands needed to resume

## Cross-Machine Rules

- never rely on chat history alone
- never leave important design decisions undocumented
- keep the repository runnable from a fresh clone
- prefer small, validated checkpoints over large uncommitted sessions

## Current Priority For This Project

The current active work is the SEQTRAK device rendering layer. If resuming after interruption, start by checking the latest handoff note in `docs/notes/`.
