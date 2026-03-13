//JSON Settings Merge
function mergeSettings(savedSettingsJSON, defaultSettings) {

  const savedSettings = JSON.parse(savedSettingsJSON);

  const merged = { ...defaultSettings };

  for (let key in savedSettings) {
    merged[key] = savedSettings[key];
  }

  const mergedJSON = JSON.stringify(merged);

  return {
    mergedObject: merged,
    mergedJSON: mergedJSON
  };
}