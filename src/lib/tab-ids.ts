/** Tab va panel id'lari — `Tabs` va `TabPanel` orasidagi yagona kelishuv. */
export function tabId(baseId: string, tab: string) {
  return `${baseId}-tab-${tab}`;
}

export function panelId(baseId: string, tab: string) {
  return `${baseId}-panel-${tab}`;
}
