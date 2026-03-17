# Project Scope - R1

## Mission

Build a modular tutorial platform for grooveboxes and related music devices, starting with the Yamaha SEQTRAK. The platform should reduce learning friction for curious users who struggle with steep learning curves, weak tutorials, or genre coverage that does not match how they want to make music.

R1 is not "production ready." It is the internal foundation that proves the system can support the long-term vision.

## Device Rollout Order

1. Yamaha SEQTRAK
2. Woovebox Pro
3. Teenage Engineering devices, starting with the PO-33

Each device should follow the same overall structure while still reflecting that device's specific capabilities, constraints, and proper usage patterns.

For R1 delivery:

- ship with SEQTRAK content only
- design the architecture to support additional devices cleanly later
- treat future devices as extensions of the same learning system, not separate one-off projects

## Audience

Primary audience:

- the project owner
- people like the project owner
- curious beginners who bought a device and stalled out
- users frustrated by poor onboarding or shallow tutorials
- users interested in genres that are not commonly covered by existing tutorials

Implication:

- tutorials must assume low familiarity with grooveboxes
- explanations must avoid unnecessary jargon
- lessons should still respect real device workflows rather than oversimplifying them into something inaccurate

## R1 Goals

### 1. Reference-First Foundation

The first version should prioritize:

- site structure
- information architecture
- navigation
- device reference content
- tutorial content structure

### 2. Device Rendering Layer

The system should support a CSS-rendered device representation that mirrors the device drawings from manuals or other authoritative references as closely as practical.

This is important because it enables future features such as:

- virtual screenshots
- highlighted controls
- press-this-button guidance
- interactive step overlays
- narrated walkthrough support
- animation of device actions

Rendering constraints:

- the CSS device is a teaching aid, not a simulator
- it should not attempt to recreate full device functionality on the web
- every meaningful control should be explicitly tagged so tutorials can target, shade, highlight, or annotate it
- the system should support focused views of only relevant device regions when a full-device render would be unnecessarily large
- the system should also support a persistent full-device view where tutorial steps change highlighting rather than regenerating a new image each time

Design implication:

- the rendering layer should support both full-device and partial-device compositions
- tutorial steps should be able to reference controls semantically, not just by visual coordinates

### 3. Modular Multi-Device Architecture

The project must be structured so future AI agents can extend it for additional instruments without rethinking the whole system.

That means:

- reusable content model
- reusable page structure
- reusable device tutorial patterns
- explicit documentation of conventions
- separation between shared platform code and device-specific content

### 4. Factual But Not Manual-Bound

Content must be:

- factually grounded in official manuals and confirmed device capabilities
- clearly separated from interpretation where needed

But the project should also include:

- better workflows than the manuals when justified
- respected community best practices
- practical learning paths that lower the barrier to entry

Rule of thumb:

- manuals define capability boundaries
- tutorials can improve the teaching approach

### 5. Song-Based Learning

Tutorials should aim for direct song recreation as closely as practical.

Constraints and intent:

- the song should be taught step by step
- the lesson should explain why each part is being built
- the experience should teach the device, not just reproduce a preset or prebuilt file
- the same song selection should ideally be reusable across multiple devices, showing each device's version of the song
- song choices should go beyond stereotypical ambient or generic electronic demos when possible

## Out Of Scope For Initial Build

These are part of the vision, but not required before the foundation is in place:

- polished production-ready interactive tutorial engine
- narration with ElevenLabs
- advanced animations
- fully realized progress tracking
- large media asset systems

They should be anticipated in the architecture, but not front-loaded into R1 implementation unless needed by the foundation.

## Recommended Product Shape For R1

Build the foundation as a documentation-first web app with app-like architecture.

Interpretation:

- not just a pile of static pages
- not a fully interactive simulator yet
- should support structured content, reusable layouts, device schemas, and a renderable device UI layer
- should validate the product with SEQTRAK alone before expanding device coverage

## Content Principles

- Accuracy over speed
- Beginner clarity over expert shorthand
- Modular and repeatable over one-off pages
- Device-specific truth over generic music-production advice
- Lessons should be musically relevant, not just technically complete

## Success Condition For R1

R1 is complete when the foundation supports goals 1 through 5:

- coherent site structure and navigation
- reference-driven SEQTRAK content architecture
- reusable multi-device system design
- factual tutorials informed by manuals plus better teaching workflows
- a clear path to song-based, step-by-step lessons
