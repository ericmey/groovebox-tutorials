import { describe, expect, it } from "vitest";
import { seqtrakDevice } from "@/content/devices/seqtrak/device";

describe("seqtrak device data", () => {
  it("uses unique control ids", () => {
    const ids = seqtrakDevice.controls.map((control) => control.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("uses valid region ids for controls", () => {
    const regionIds = new Set(seqtrakDevice.regions.map((region) => region.id));
    for (const control of seqtrakDevice.controls) {
      expect(regionIds.has(control.regionId)).toBe(true);
    }
  });

  it("uses valid control and region references in steps", () => {
    const controlIds = new Set(seqtrakDevice.controls.map((control) => control.id));
    const regionIds = new Set(seqtrakDevice.regions.map((region) => region.id));

    for (const step of seqtrakDevice.steps) {
      for (const controlId of step.activeControlIds) {
        expect(controlIds.has(controlId)).toBe(true);
      }
      for (const regionId of step.focusRegionIds) {
        expect(regionIds.has(regionId)).toBe(true);
      }
    }
  });
});
