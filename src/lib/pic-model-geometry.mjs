export function smoothStep(t) {
  const u = Math.max(0, Math.min(1, t));
  return u * u * (3 - 2 * u);
}

export function zBendPoint({ startX, startZ, endX, endZ, y = 0 }, t) {
  const u = Math.max(0, Math.min(1, t));
  return {
    x: startX + (endX - startX) * u,
    y,
    z: startZ + (endZ - startZ) * smoothStep(u)
  };
}

export function zBendSlope({ startX, startZ, endX, endZ }, t) {
  const dx = endX - startX;
  if (dx === 0) return Number.POSITIVE_INFINITY;
  const u = Math.max(0, Math.min(1, t));
  return ((endZ - startZ) * 6 * u * (1 - u)) / dx;
}
