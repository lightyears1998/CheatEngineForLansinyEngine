export enum PotionRank {
  LV1,
  LV2,
  LV3,
  LV4
}

export function getPotionEffect(potionRank: number): number {
  switch (potionRank) {
    case PotionRank.LV1: return 30;
    case PotionRank.LV2: return 100;
  }

  throw new Error("Unknown potion effect: " + potionRank);
}
