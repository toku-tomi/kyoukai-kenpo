export type Term = {
  /** 期間コード */
  readonly code: string;

  /** 期間名称 */
  readonly name: string;

  /** 期間開始日（YYYY-MM-DD） */
  readonly startDate: string;

  /** 期間終了日（YYYY-MM-DD） */
  readonly endDate: string | null;
};

export const TERMS: Readonly<Term[]> = [
  {
    code: "r5-03",
    name: "令和５年度",
    startDate: "2023-03-01",
    endDate: null,
  },
  {
    code: "r4-03",
    name: "令和４年度",
    startDate: "2022-03-01",
    endDate: "2023-02-28",
  },
];
