import type { DeviceRecord } from "@/lib/types";

type DeviceCanvasProps = {
  device: DeviceRecord;
  activeControlIds: string[];
  focusRegionIds: string[];
};

function controlClass(shape: string) {
  return `device-control device-control--${shape}`;
}

export function DeviceCanvas({
  device,
  activeControlIds,
  focusRegionIds,
}: DeviceCanvasProps) {
  const activeSet = new Set(activeControlIds);
  const focusSet = new Set(focusRegionIds);

  return (
    <section className="device-stage">
      <div className="device-stage__header">
        <div>
          <p className="eyebrow">Panel Anatomy</p>
          <h2>{device.name}</h2>
        </div>
        <p className="device-stage__status">{device.status}</p>
      </div>
      <div
        className="device-frame"
        aria-label={`${device.name} line drawing`}
        style={{ aspectRatio: `${device.viewport.width} / ${device.viewport.height}` }}
      >
        <div className="device-silhouette" />
        {device.plates.map((plate) => (
          <div
            key={plate.id}
            className={`device-plate${plate.tone === "soft" ? " device-plate--soft" : ""}`}
            style={{
              left: `${(plate.x / 114) * 100}%`,
              top: `${plate.y}%`,
              width: `${(plate.w / 114) * 100}%`,
              height: `${plate.h}%`,
              borderRadius: `${plate.radius ?? 10}px`,
            }}
          />
        ))}
        {device.regions.map((region) => (
          <div
            key={region.id}
            className={`device-region${focusSet.has(region.id) ? " is-focused" : ""}`}
            style={{
              left: `${(region.x / 114) * 100}%`,
              top: `${region.y}%`,
              width: `${(region.w / 114) * 100}%`,
              height: `${region.h}%`,
            }}
            aria-label={region.label}
            title={region.description}
          />
        ))}
        {device.controls.map((control) => (
          <div
            key={control.id}
            className={`${controlClass(control.shape)}${activeSet.has(control.id) ? " is-active" : ""}`}
            style={{
              left: `${(control.x / 114) * 100}%`,
              top: `${control.y}%`,
              width: `${(control.w / 114) * 100}%`,
              height: `${control.h}%`,
            }}
            title={`${control.label}: ${control.description}`}
            data-control-id={control.id}
            aria-label={control.label}
          />
        ))}
      </div>
    </section>
  );
}
