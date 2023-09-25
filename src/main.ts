import * as fs from "node:fs/promises";
import * as path from "path";
import { copy } from "fs-extra";
import { payGradesJson } from "@/json-pages/v1/pay-grades.[gradeType]";
import { prefecturesJson } from "./json-pages/v1/prefectures";
import { termsJson } from "./json-pages/v1/terms";
import { ratesJson } from "./json-pages/v1/terms.[term].rates";

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

  const v1Dir = path.join(artifactsDir, "v1");

  // 報酬等級区分 /v1/pay-grades/[gradeType]/
  results.push(payGradesJson(v1Dir));

  // 都道府県 /v1/prefectures/
  results.push(prefecturesJson(v1Dir));

  // 期間 /v1/terms/
  results.push(termsJson(v1Dir));

  // 料率 /v1/terms/[term]/rates/
  results.push(ratesJson(v1Dir));

  await Promise.all(results);
}

main()
  .then(() => {
    console.log("Success!");
  })
  .catch((error: any) => {
    console.error(error);
  });
