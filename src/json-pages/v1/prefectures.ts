import { PREFECTURES } from "@/consts/prefectures";
import { outputJsonApiFile } from "@/utils/json-api";

export async function prefecturesJson(baseDir: string): Promise<void> {
  await outputJsonApiFile(baseDir, "prefectures", PREFECTURES);
}
