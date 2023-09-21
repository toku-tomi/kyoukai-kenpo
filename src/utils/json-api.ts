import * as fs from "node:fs/promises";
import * as path from "path";
import { outputJSON } from "fs-extra";

export async function outputJsonApiFile(
  baseDir: string,
  apiPath: string,
  data: object
): Promise<void> {
  const dirPath = path.join(baseDir, apiPath);
  await fs.mkdir(dirPath, {
    recursive: true,
  });
  await outputJSON(path.join(dirPath, "index.json"), data, { EOL: "" });
}
