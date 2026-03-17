# Architecture

## Current Direction

The project is a documentation-first tutorial application with a reusable device-learning model underneath it.

R1 ships SEQTRAK only, but the codebase should remain prepared for:

- multiple devices
- device-specific content
- shared tutorial patterns
- future interactive overlays and narration

## Core Rules

- Shared application code belongs in `app/`, `components/`, and `lib/`.
- Device-specific content belongs under `content/devices/<slug>/`.
- The rendered device is a teaching aid, not a simulator.
- Tutorial steps must reference device regions and controls semantically by ID.
- Any future AI agent should be able to add lessons without redesigning the rendering system.

## Current SEQTRAK Model

The SEQTRAK data model currently defines:

- official-control-inspired region structure
- individually addressable controls
- tutorial steps with focused regions and highlighted controls

That model is consumed by:

- a sticky tutorial/device layout
- a CSS-rendered panel map
- tests that validate step references and control identity consistency

## Next Likely Extensions

- split controls into reusable subcomponents by device section
- attach manual references to each control or lesson step
- add focused-region views for smaller step-specific panel crops
- move tutorial content into MDX or structured content files while keeping control IDs stable
