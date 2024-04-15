export const ITEM_TYPES = [
  "user",
  "address",
  "product",
  "order",
  "saleschannel",
] as const;
export type ItemType = (typeof ITEM_TYPES)[number];
