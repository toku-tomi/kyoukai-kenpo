import { TERMS } from "@/consts/terms";
import { outputJsonApiFile } from "@/utils/json-api";

export async function termsJson(baseDir: string): Promise<void> {
  await outputJsonApiFile(baseDir, "terms", TERMS);
}
