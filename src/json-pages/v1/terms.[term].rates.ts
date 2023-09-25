import { RATE_DATA_BY_TERM } from "@/consts/rates";
import { outputJsonApiFile } from "@/utils/json-api";

export async function ratesJson(baseDir: string): Promise<void> {
  const results = [];

  for (const [term, rateData] of Object.entries(RATE_DATA_BY_TERM)) {
    const apiRatesData = rateData.healthRateDataList.map((healthRateData) => ({
      prefectureId: healthRateData.prefectureId,
      healthRate: healthRateData.healthRate,
      nursingRate: rateData.nursingRate,
      pensionRate: rateData.pensionRate,
      childcareRate: rateData.childcareRate,
    }));

    results.push(
      outputJsonApiFile(baseDir, `terms/${term}/rates`, apiRatesData)
    );
  }

  await Promise.all(results);
}
