# SEQTRAK Panel Map Notes

## Source

This control map is currently based on:

- `docs/reference/seqtrak/seqtrak_en_qg_a0.pdf`
- `docs/reference/seqtrak/SEQTRAK_user_guide_En_D0.pdf`

Primary extraction reference:

- User Guide section `2. Panel Sections and Main Functions`
- User Guide pages `14` through `17`

## Official Control Names Captured

Left side:

- `[VOL+]`
- `[VOL−]`
- `[DELETE]`
- `[MUTE]`
- `[SOLO]`
- `[PAGE]`
- `[P/PLAY]`

Top left:

- `[ALL] knob`
- Track knobs
- Drum keys
- Record key
- Synth keys
- `[BAR LENGTH]`
- `[OCTAVE]`
- `[SCALE]`
- `[KEY]`
- `[REC SAMPLE]`

Top right:

- `Index`
- `Global Meter`
- `[UNDO/REDO]`
- `Sound Design knobs 1–4`
- `Sound Design Page button`
- `[CLEAR FX]`
- `[FX] knob`
- `[MASTER/SINGLE] switch`
- `[FX LEVEL]`
- `[HIGH PASS]`
- `[REPEATER]`
- `FX Page button`
- `Speaker and microphone`

Right side:

- `[USB]`
- `[PHONES]`
- `[AUDIO IN]`
- `[MIDI]`
- `[BPM+]`
- `[BPM−]`
- `[SWING]`
- `[PROJECT↑]`

## Current Design Intent

The rendered panel should:

- feel like a line drawing of the actual SEQTRAK
- preserve approximate spacing and relative scale
- support control highlighting and region focus
- remain useful for future cropped or persistent panel views

The rendered panel should not:

- simulate actual audio or sequencing behavior
- replace the physical device interface
- become dependent on static image exports for each tutorial step
