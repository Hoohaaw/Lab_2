import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

export async function loadConfig() {
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
