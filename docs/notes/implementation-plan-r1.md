# R1 Implementation Plan

## Chosen Stack

Use:

- React
- Next.js
- TypeScript
- MDX plus structured content files
- plain CSS with CSS variables for the device rendering layer

## Why This Stack

This project is documentation-first, but it also needs app-like behavior later:

- route-based tutorial pages
- reusable layouts
- structured device metadata
- interactive highlighting
- future animation and narration support

Next.js fits that well without forcing the project into a fully backend-heavy shape. React also matches the preferred working style and makes it straightforward to build a semantic device-rendering system.

## R1 Deliverables

### 1. Foundation App

Build the site shell with:

- homepage
- global navigation
- device-aware routing structure
- reusable page layout primitives
- typography and visual system

For R1, only SEQTRAK content ships, but routing and data structures should assume multiple devices later.

### 2. Content System

Create a modular content model for:

- device overview
- quick start
- navigation reference
- tutorial lessons
- practice exercises
- cheat sheets
- song-based lessons
- sample requirements

The content model should separate:

- shared schema
- device metadata
- lesson content
- tutorial-step annotations

### 3. SEQTRAK Device Schema

Define a device description layer for SEQTRAK including:

- device metadata
- control groups
- named controls
- logical regions
- tutorial-friendly identifiers
- reference links back to manual sections where needed

This schema should support future devices without redesign.

### 4. CSS Device Rendering Layer

Build a semantic visual representation of the SEQTRAK that supports:

- full-device view
- grouped-region view
- control highlighting
- active-step emphasis
- labels and annotations

Important constraint:

- this is not a simulator
- this is a visual teaching surface

### 5. Initial SEQTRAK Information Architecture

Create the first content sections for:

- overview
- quick start
- device map
- core concepts
- beginner workflow
- reference section

These can begin as structured placeholders where device-accurate content still needs to be extracted from manuals.

### 6. Manual-Driven Extraction Pass

Use the Yamaha manuals already in the repo to produce:

- verified terminology
- verified control names
- verified workflow steps
- capability boundaries
- references for future lesson accuracy

### 7. Tutorial Engine Pattern

Define how a lesson step works.

Each step should be able to include:

- instructional text
- targeted controls
- optional focused device region
- notes or warnings
- optional references
- optional sample requirements

This should be general enough to reuse for future devices and future interactive upgrades.

## Suggested Build Order

1. Scaffold the Next.js app and base design system.
2. Define the shared content and device schema.
3. Create the SEQTRAK route structure and placeholder pages.
4. Build the first CSS device anatomy layer.
5. Extract and normalize manual-based SEQTRAK terminology.
6. Populate the first reference and quick-start pages.
7. Define lesson-step rendering and connect it to the device highlight system.

## Architectural Rules

- Shared platform code must be separate from device-specific content.
- Device controls must be referenced by semantic IDs, not ad hoc styling hooks.
- Tutorials should target controls and regions declaratively.
- Content should be writable by future AI agents without requiring code edits for every lesson.
- Sample-based lessons must have a place to declare asset requirements and setup steps.

## Immediate Next Action

Scaffold the application foundation and content model first, then begin the SEQTRAK device schema and rendering layer in parallel with manual extraction.
