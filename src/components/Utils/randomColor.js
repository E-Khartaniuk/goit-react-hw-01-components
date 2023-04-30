export function getRandomPastelColor() {
  const r = Math.floor(Math.random() * 128) + 128;
  const g = Math.floor(Math.random() * 128) + 128;
  const b = Math.floor(Math.random() * 128) + 128;

  const hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return hex;
}
