
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

/**
 * Loads configuration from password-validator.config.js in the project root.
 * @async
 * @returns {Promise<Object>} A promise that resolves to the config object, or an empty object if not found or failed to load.
 */
async function loadConfig() {
  const configPath = path.resolve(process.cwd(), "password-validator.config.js");
  if (fs.existsSync(configPath)) {
    try {
      const fileConfig = await import(pathToFileURL(configPath).href);
      return fileConfig.default || fileConfig;
    } catch (err) {
      console.warn("Could not load password-validator.config.js:", err);
    }
  }
  return {};
}

export default loadConfig;
