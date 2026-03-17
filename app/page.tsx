import Link from "next/link";
import { devices } from "@/lib/devices";

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">R1 Foundation</p>
          <h1>SEQTRAK-first tutorials built as a reusable device learning system.</h1>
          <p className="hero__lede">
            This first pass is not a finished tutorial library. It is the product
            foundation: modular content, a structured device model, and a visual
            teaching layer that can replace brittle screenshot workflows.
          </p>
          <div className="hero__actions">
            <Link href="/devices/seqtrak" className="button">
              Open the SEQTRAK demo
            </Link>
            <a href="#devices" className="button button--ghost">
              Review the foundation
            </a>
          </div>
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Guiding Rules</p>
          <ul className="bullet-list">
            <li>Manual-grounded accuracy, but better teaching workflows.</li>
            <li>One device shipped first, many devices supported later.</li>
            <li>CSS device anatomy as a dynamic tutorial aid, not a simulator.</li>
          </ul>
        </div>
      </section>

      <section className="panel" id="devices">
        <div className="panel__header">
          <p className="eyebrow">Device Library Shape</p>
          <h2>Current supported device seed</h2>
        </div>
        <div className="device-grid">
          {devices.map((device) => (
            <article key={device.slug} className="device-summary">
              <p className="device-summary__status">{device.status}</p>
              <h3>{device.name}</h3>
              <p>{device.tagline}</p>
              <ul className="bullet-list">
                {device.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
              <Link href={`/devices/${device.slug}`} className="inline-link">
                View demo
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
