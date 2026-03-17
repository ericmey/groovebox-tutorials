import { notFound } from "next/navigation";
import { DeviceDemoShell } from "@/components/device-demo-shell";
import { devices, getDeviceBySlug } from "@/lib/devices";

export function generateStaticParams() {
  return devices.map((device) => ({ slug: device.slug }));
}

export default async function DevicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const device = getDeviceBySlug(slug);

  if (!device) {
    notFound();
  }

  return (
    <div className="page page--device">
      <section className="device-hero">
        <div>
          <p className="eyebrow">Device Demo</p>
          <h1>{device.name}</h1>
          <p className="hero__lede">{device.summary}</p>
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Why this matters</p>
          <ul className="bullet-list">
            {device.keyPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>
      <DeviceDemoShell device={device} />
    </div>
  );
}
