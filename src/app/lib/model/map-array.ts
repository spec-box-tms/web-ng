export function mapArray<TO, FROM>(
  mapItem: (value: FROM) => TO
): (items: FROM[]) => TO[] {
  return (items: FROM[]) => items.map(mapItem);
}
