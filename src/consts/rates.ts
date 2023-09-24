export type RateData = {
  /** 都道府県ごとの健康保険料率 */
  readonly healthRateDataList: HealthRateData[];

  /** 介護保険料率 */
  readonly nursingRate: number;

  /** 厚生年金保険料率 */
  readonly pensionRate: number;

  /** 子育て拠出金率 */
  readonly childcareRate: number;
};

type HealthRateData = {
  /** 都道府県ID */
  readonly prefectureId: number;

  /** 健康保険料率 */
  readonly healthRate: number;
};

const HEALTH_RATES_FOR_R5_03: HealthRateData[] = [
  { prefectureId: 1, healthRate: 0.1029 },
  { prefectureId: 2, healthRate: 0.0979 },
  { prefectureId: 3, healthRate: 0.0977 },
  { prefectureId: 4, healthRate: 0.1005 },
  { prefectureId: 5, healthRate: 0.0986 },
  { prefectureId: 6, healthRate: 0.0998 },
  { prefectureId: 7, healthRate: 0.0953 },
  { prefectureId: 8, healthRate: 0.0973 },
  { prefectureId: 9, healthRate: 0.0996 },
  { prefectureId: 10, healthRate: 0.0976 },
  { prefectureId: 11, healthRate: 0.0982 },
  { prefectureId: 12, healthRate: 0.0987 },
  { prefectureId: 13, healthRate: 0.1 },
  { prefectureId: 14, healthRate: 0.1002 },
  { prefectureId: 15, healthRate: 0.0933 },
  { prefectureId: 16, healthRate: 0.0957 },
  { prefectureId: 17, healthRate: 0.0966 },
  { prefectureId: 18, healthRate: 0.0991 },
  { prefectureId: 19, healthRate: 0.0967 },
  { prefectureId: 20, healthRate: 0.0949 },
  { prefectureId: 21, healthRate: 0.098 },
  { prefectureId: 22, healthRate: 0.0975 },
  { prefectureId: 23, healthRate: 0.1001 },
  { prefectureId: 24, healthRate: 0.0981 },
  { prefectureId: 25, healthRate: 0.0973 },
  { prefectureId: 26, healthRate: 0.1009 },
  { prefectureId: 27, healthRate: 0.1029 },
  { prefectureId: 28, healthRate: 0.1017 },
  { prefectureId: 29, healthRate: 0.1014 },
  { prefectureId: 30, healthRate: 0.0994 },
  { prefectureId: 31, healthRate: 0.0982 },
  { prefectureId: 32, healthRate: 0.1026 },
  { prefectureId: 33, healthRate: 0.1007 },
  { prefectureId: 34, healthRate: 0.0992 },
  { prefectureId: 35, healthRate: 0.0996 },
  { prefectureId: 36, healthRate: 0.1025 },
  { prefectureId: 37, healthRate: 0.1023 },
  { prefectureId: 38, healthRate: 0.1001 },
  { prefectureId: 39, healthRate: 0.101 },
  { prefectureId: 40, healthRate: 0.1036 },
  { prefectureId: 41, healthRate: 0.1051 },
  { prefectureId: 42, healthRate: 0.1021 },
  { prefectureId: 43, healthRate: 0.1032 },
  { prefectureId: 44, healthRate: 0.102 },
  { prefectureId: 45, healthRate: 0.0976 },
  { prefectureId: 46, healthRate: 0.1026 },
  { prefectureId: 47, healthRate: 0.0989 },
];

const HEALTH_RATES_FOR_R4_03: HealthRateData[] = [
  { prefectureId: 1, healthRate: 0.1039 },
  { prefectureId: 2, healthRate: 0.1003 },
  { prefectureId: 3, healthRate: 0.0991 },
  { prefectureId: 4, healthRate: 0.1018 },
  { prefectureId: 5, healthRate: 0.1027 },
  { prefectureId: 6, healthRate: 0.0999 },
  { prefectureId: 7, healthRate: 0.0965 },
  { prefectureId: 8, healthRate: 0.0977 },
  { prefectureId: 9, healthRate: 0.099 },
  { prefectureId: 10, healthRate: 0.0973 },
  { prefectureId: 11, healthRate: 0.0971 },
  { prefectureId: 12, healthRate: 0.0976 },
  { prefectureId: 13, healthRate: 0.0981 },
  { prefectureId: 14, healthRate: 0.0985 },
  { prefectureId: 15, healthRate: 0.0951 },
  { prefectureId: 16, healthRate: 0.0961 },
  { prefectureId: 17, healthRate: 0.0989 },
  { prefectureId: 18, healthRate: 0.0996 },
  { prefectureId: 19, healthRate: 0.0966 },
  { prefectureId: 20, healthRate: 0.0967 },
  { prefectureId: 21, healthRate: 0.0982 },
  { prefectureId: 22, healthRate: 0.0975 },
  { prefectureId: 23, healthRate: 0.0993 },
  { prefectureId: 24, healthRate: 0.0991 },
  { prefectureId: 25, healthRate: 0.0983 },
  { prefectureId: 26, healthRate: 0.0995 },
  { prefectureId: 27, healthRate: 0.1022 },
  { prefectureId: 28, healthRate: 0.1013 },
  { prefectureId: 29, healthRate: 0.0996 },
  { prefectureId: 30, healthRate: 0.1018 },
  { prefectureId: 31, healthRate: 0.0994 },
  { prefectureId: 32, healthRate: 0.1035 },
  { prefectureId: 33, healthRate: 0.1025 },
  { prefectureId: 34, healthRate: 0.1009 },
  { prefectureId: 35, healthRate: 0.1015 },
  { prefectureId: 36, healthRate: 0.1043 },
  { prefectureId: 37, healthRate: 0.1034 },
  { prefectureId: 38, healthRate: 0.1026 },
  { prefectureId: 39, healthRate: 0.103 },
  { prefectureId: 40, healthRate: 0.1021 },
  { prefectureId: 41, healthRate: 0.11 },
  { prefectureId: 42, healthRate: 0.1047 },
  { prefectureId: 43, healthRate: 0.1045 },
  { prefectureId: 44, healthRate: 0.1052 },
  { prefectureId: 45, healthRate: 0.1014 },
  { prefectureId: 46, healthRate: 0.1065 },
  { prefectureId: 47, healthRate: 0.1009 },
];

export const RATE_DATA_BY_TERM: Record<string, RateData> = {
  r5_03: {
    healthRateDataList: HEALTH_RATES_FOR_R5_03,
    nursingRate: 0.0182,
    pensionRate: 0.183,
    childcareRate: 0.0036,
  },
  r4_03: {
    healthRateDataList: HEALTH_RATES_FOR_R4_03,
    nursingRate: 0.0164,
    pensionRate: 0.183,
    childcareRate: 0.0036,
  },
} as const;
