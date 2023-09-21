import {
  PAY_GRADES_FOR_INSURANCE,
  PAY_GRADES_FOR_PENSION,
} from "@/consts/pay-grades";
import { outputJsonApiFile } from "@/utils/json-api";

export async function payGradesJson(baseDir: string): Promise<void> {
  const results = [];

  results.push(
    outputJsonApiFile(baseDir, "pay-grades/insurance", PAY_GRADES_FOR_INSURANCE)
  );
  results.push(
    outputJsonApiFile(baseDir, "pay-grades/pension", PAY_GRADES_FOR_PENSION)
  );

  await Promise.all(results);
}
