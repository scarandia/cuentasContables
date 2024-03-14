export function filterAccounts(items, filterType) {
  return items.filter(item => item.type === filterType);
}
