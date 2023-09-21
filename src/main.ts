import * as fs from "node:fs/promises";
import * as path from "path";
import { copy } from "fs-extra";

async function main(): Promise<void> {
  const artifactsDir = path.join(__dirname, "..", "dist");
  const publicDir = path.join(__dirname, "..", "public");

  // cleanup
  await fs.rm(artifactsDir, { recursive: true, force: true });

  // make directory
  await fs.mkdir(artifactsDir);

  // copy public files
  await copy(publicDir, artifactsDir);

  // TODO: build json
}

main()
  .then(() => {
    console.log("Success!");
  })
  .catch((error: any) => {
    console.error(error);
  });
