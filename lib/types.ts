export type DeviceControlShape =
  | "circle"
  | "rect"
  | "pill"
  | "slider"
  | "switch"
  | "port"
  | "meter"
  | "speaker";

export type DeviceRegion = {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type DevicePlate = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  radius?: number;
  tone?: "default" | "soft";
};

export type DeviceControl = {
  id: string;
  label: string;
  shortLabel?: string;
  description: string;
  regionId: string;
  shape: DeviceControlShape;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type DeviceStep = {
  id: string;
  title: string;
  summary: string;
  body: string;
  focusRegionIds: string[];
  activeControlIds: string[];
  note?: string;
};

export type DeviceRecord = {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  summary: string;
  goals: string[];
  keyPrinciples: string[];
  viewport: {
    width: number;
    height: number;
  };
  plates: DevicePlate[];
  regions: DeviceRegion[];
  controls: DeviceControl[];
  steps: DeviceStep[];
};
