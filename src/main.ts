import * as fs from "node:fs/promises";
import * as path from "path";
import { copy } from "fs-extra";
import { payGradesJson } from "@/json-pages/pay-grades";
import { prefecturesJson } from "./json-pages/prefectures";
import { termsJson } from "./json-pages/terms";

async function main(): Promise<void> {
  const artifactsDir = path.join(__dirname, "..", "dist");
  const publicDir = path.join(__dirname, "..", "public");

  // クリーンアップ
  await fs.rm(artifactsDir, { recursive: true, force: true });
  await fs.mkdir(artifactsDir);

  // 静的ファイルコピー
  await copy(publicDir, artifactsDir);

  // JSONファイル生成
  const results = [];

  // 等級区分 /pay-grades/{type}
  results.push(payGradesJson(artifactsDir));

  // 都道府県 /prefectures
  results.push(prefecturesJson(artifactsDir));

  // 期間 /terms
  results.push(termsJson(artifactsDir));

  await Promise.all(results);
}

main()
  .then(() => {
    console.log("Success!");
  })
  .catch((error: any) => {
    console.error(error);
  });
