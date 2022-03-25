export function genSlug(str: string) {
  return str.trim().toLowerCase().replace(/\s/g, '-');
}
export function arr2obj(arr: Array<any>): Record<string, any> {
  if (!arr || !arr?.length) {
    return null;
  }
  return arr.reduce((a, v) => ({ ...a, [v.key.toLowerCase()]: v }), {});
}
