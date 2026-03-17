"use client";

import { useState } from "react";
import { DeviceCanvas } from "@/components/device-canvas";
import type { DeviceRecord } from "@/lib/types";

type DeviceDemoShellProps = {
  device: DeviceRecord;
};

export function DeviceDemoShell({ device }: DeviceDemoShellProps) {
  const [activeStepId, setActiveStepId] = useState(device.steps[0]?.id ?? "");
  const activeStep =
    device.steps.find((step) => step.id === activeStepId) ?? device.steps[0];

  return (
    <section className="tutorial-page">
      <div className="tutorial-page__device-rail">
        <div className="tutorial-page__device-sticky">
          <DeviceCanvas
            device={device}
            activeControlIds={activeStep.activeControlIds}
            focusRegionIds={activeStep.focusRegionIds}
          />
        </div>
      </div>

      <div className="tutorial-page__content">
        <section className="panel">
          <div className="panel__header">
            <p className="eyebrow">Demo Purpose</p>
            <h2>Why this page exists</h2>
          </div>
          <p>{device.summary}</p>
          <ul className="bullet-list">
            {device.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <div className="panel__header">
            <p className="eyebrow">Interactive Lesson Model</p>
            <h2>Choose a step to change the highlighted controls</h2>
          </div>
          <div className="step-stack">
            {device.steps.map((step, index) => {
              const selected = step.id === activeStep.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  className={`step-card${selected ? " is-selected" : ""}`}
                  onClick={() => setActiveStepId(step.id)}
                >
                  <span className="step-card__index">Step {index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.summary}</p>
                  <div className="tag-row">
                    {step.focusRegionIds.map((regionId) => (
                      <span key={regionId} className="tag">
                        Region: {regionId}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="panel">
          <div className="panel__header">
            <p className="eyebrow">Selected Step</p>
            <h2>{activeStep.title}</h2>
          </div>
          <p>{activeStep.body}</p>
          <div className="tag-row">
            {activeStep.activeControlIds.map((controlId) => (
              <span key={controlId} className="tag tag--active">
                Control: {controlId}
              </span>
            ))}
          </div>
          {activeStep.note ? <p className="note">{activeStep.note}</p> : null}
        </section>
      </div>
    </section>
  );
}
