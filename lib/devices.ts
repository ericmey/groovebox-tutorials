import { seqtrakDevice } from "@/content/devices/seqtrak/device";

export const devices = [seqtrakDevice];

export function getDeviceBySlug(slug: string) {
  return devices.find((device) => device.slug === slug);
}
