export type PayGrade = {
  /** 等級 */
  readonly grade: number;

  /** 報酬月額（下限） */
  readonly minPay: number;

  /** 報酬月額（上限）、nullの場合は上限なし */
  readonly maxPay: number | null;

  /** 標準報酬月額 */
  readonly standardPay: number;
};

/** 月額報酬による等級区分（健康保険料用） */
export const PAY_GRADES_FOR_INSURANCE: Readonly<PayGrade[]> = [
  { grade: 1, minPay: 0, maxPay: 62999, standardPay: 58000 },
  { grade: 2, minPay: 63000, maxPay: 72999, standardPay: 68000 },
  { grade: 3, minPay: 73000, maxPay: 82999, standardPay: 78000 },
  { grade: 4, minPay: 83000, maxPay: 92999, standardPay: 88000 },
  { grade: 5, minPay: 93000, maxPay: 100999, standardPay: 98000 },
  { grade: 6, minPay: 101000, maxPay: 106999, standardPay: 104000 },
  { grade: 7, minPay: 107000, maxPay: 113999, standardPay: 110000 },
  { grade: 8, minPay: 114000, maxPay: 121999, standardPay: 118000 },
  { grade: 9, minPay: 122000, maxPay: 129999, standardPay: 126000 },
  { grade: 10, minPay: 130000, maxPay: 137999, standardPay: 134000 },
  { grade: 11, minPay: 138000, maxPay: 145999, standardPay: 142000 },
  { grade: 12, minPay: 146000, maxPay: 154999, standardPay: 150000 },
  { grade: 13, minPay: 155000, maxPay: 164999, standardPay: 160000 },
  { grade: 14, minPay: 165000, maxPay: 174999, standardPay: 170000 },
  { grade: 15, minPay: 175000, maxPay: 184999, standardPay: 180000 },
  { grade: 16, minPay: 185000, maxPay: 194999, standardPay: 190000 },
  { grade: 17, minPay: 195000, maxPay: 209999, standardPay: 200000 },
  { grade: 18, minPay: 210000, maxPay: 229999, standardPay: 220000 },
  { grade: 19, minPay: 230000, maxPay: 249999, standardPay: 240000 },
  { grade: 20, minPay: 250000, maxPay: 269999, standardPay: 260000 },
  { grade: 21, minPay: 270000, maxPay: 289999, standardPay: 280000 },
  { grade: 22, minPay: 290000, maxPay: 309999, standardPay: 300000 },
  { grade: 23, minPay: 310000, maxPay: 329999, standardPay: 320000 },
  { grade: 24, minPay: 330000, maxPay: 349999, standardPay: 340000 },
  { grade: 25, minPay: 350000, maxPay: 369999, standardPay: 360000 },
  { grade: 26, minPay: 370000, maxPay: 394999, standardPay: 380000 },
  { grade: 27, minPay: 395000, maxPay: 424999, standardPay: 410000 },
  { grade: 28, minPay: 425000, maxPay: 454999, standardPay: 440000 },
  { grade: 29, minPay: 455000, maxPay: 484999, standardPay: 470000 },
  { grade: 30, minPay: 485000, maxPay: 514999, standardPay: 500000 },
  { grade: 31, minPay: 515000, maxPay: 544999, standardPay: 530000 },
  { grade: 32, minPay: 545000, maxPay: 574999, standardPay: 560000 },
  { grade: 33, minPay: 575000, maxPay: 604999, standardPay: 590000 },
  { grade: 34, minPay: 605000, maxPay: 634999, standardPay: 620000 },
  { grade: 35, minPay: 635000, maxPay: 664999, standardPay: 650000 },
  { grade: 36, minPay: 665000, maxPay: 694999, standardPay: 680000 },
  { grade: 37, minPay: 695000, maxPay: 729999, standardPay: 710000 },
  { grade: 38, minPay: 730000, maxPay: 769999, standardPay: 750000 },
  { grade: 39, minPay: 770000, maxPay: 809999, standardPay: 790000 },
  { grade: 40, minPay: 810000, maxPay: 854999, standardPay: 830000 },
  { grade: 41, minPay: 855000, maxPay: 904999, standardPay: 880000 },
  { grade: 42, minPay: 905000, maxPay: 954999, standardPay: 930000 },
  { grade: 43, minPay: 955000, maxPay: 1004999, standardPay: 980000 },
  { grade: 44, minPay: 1005000, maxPay: 1054999, standardPay: 1030000 },
  { grade: 45, minPay: 1055000, maxPay: 1114999, standardPay: 1090000 },
  { grade: 46, minPay: 1115000, maxPay: 1174999, standardPay: 1150000 },
  { grade: 47, minPay: 1175000, maxPay: 1234999, standardPay: 1210000 },
  { grade: 48, minPay: 1235000, maxPay: 1294999, standardPay: 1270000 },
  { grade: 49, minPay: 1295000, maxPay: 1354999, standardPay: 1330000 },
  { grade: 50, minPay: 1355000, maxPay: null, standardPay: 1390000 },
] as const;

/** 月額報酬による等級区分（厚生年金用） */
export const PAY_GRADES_FOR_PENSION: Readonly<PayGrade[]> = [
  { grade: 1, minPay: 0, maxPay: 92999, standardPay: 88000 },
  { grade: 2, minPay: 93000, maxPay: 100999, standardPay: 98000 },
  { grade: 3, minPay: 101000, maxPay: 106999, standardPay: 104000 },
  { grade: 4, minPay: 107000, maxPay: 113999, standardPay: 110000 },
  { grade: 5, minPay: 114000, maxPay: 121999, standardPay: 118000 },
  { grade: 6, minPay: 122000, maxPay: 129999, standardPay: 126000 },
  { grade: 7, minPay: 130000, maxPay: 137999, standardPay: 134000 },
  { grade: 8, minPay: 138000, maxPay: 145999, standardPay: 142000 },
  { grade: 9, minPay: 146000, maxPay: 154999, standardPay: 150000 },
  { grade: 10, minPay: 155000, maxPay: 164999, standardPay: 160000 },
  { grade: 11, minPay: 165000, maxPay: 174999, standardPay: 170000 },
  { grade: 12, minPay: 175000, maxPay: 184999, standardPay: 180000 },
  { grade: 13, minPay: 185000, maxPay: 194999, standardPay: 190000 },
  { grade: 14, minPay: 195000, maxPay: 209999, standardPay: 200000 },
  { grade: 15, minPay: 210000, maxPay: 229999, standardPay: 220000 },
  { grade: 16, minPay: 230000, maxPay: 249999, standardPay: 240000 },
  { grade: 17, minPay: 250000, maxPay: 269999, standardPay: 260000 },
  { grade: 18, minPay: 270000, maxPay: 289999, standardPay: 280000 },
  { grade: 19, minPay: 290000, maxPay: 309999, standardPay: 300000 },
  { grade: 20, minPay: 310000, maxPay: 329999, standardPay: 320000 },
  { grade: 21, minPay: 330000, maxPay: 349999, standardPay: 340000 },
  { grade: 22, minPay: 350000, maxPay: 369999, standardPay: 360000 },
  { grade: 23, minPay: 370000, maxPay: 394999, standardPay: 380000 },
  { grade: 24, minPay: 395000, maxPay: 424999, standardPay: 410000 },
  { grade: 25, minPay: 425000, maxPay: 454999, standardPay: 440000 },
  { grade: 26, minPay: 455000, maxPay: 484999, standardPay: 470000 },
  { grade: 27, minPay: 485000, maxPay: 514999, standardPay: 500000 },
  { grade: 28, minPay: 515000, maxPay: 544999, standardPay: 530000 },
  { grade: 29, minPay: 545000, maxPay: 574999, standardPay: 560000 },
  { grade: 30, minPay: 575000, maxPay: 604999, standardPay: 590000 },
  { grade: 31, minPay: 605000, maxPay: 634999, standardPay: 620000 },
  { grade: 32, minPay: 635000, maxPay: null, standardPay: 650000 },
] as const;
