// Mock data for the Analytics page's charts.
// Swap for a real API/database call once the backend is ready.

export type TrafficPoint = {
  month: string;
  visitors: number;
  inquiries: number;
};

export const trafficData: TrafficPoint[] = [
  { month: "Feb", visitors: 2400, inquiries: 24 },
  { month: "Mar", visitors: 3100, inquiries: 31 },
  { month: "Apr", visitors: 2800, inquiries: 27 },
  { month: "May", visitors: 3900, inquiries: 42 },
  { month: "Jun", visitors: 4600, inquiries: 51 },
  { month: "Jul", visitors: 5200, inquiries: 58 },
  { month: "Aug", visitors: 6100, inquiries: 67 },
];

export type TrafficSource = {
  name: string;
  value: number;
};

export const trafficSources: TrafficSource[] = [
  { name: "Organic Search", value: 42 },
  { name: "Direct", value: 27 },
  { name: "Referral", value: 18 },
  { name: "Social", value: 13 },
];