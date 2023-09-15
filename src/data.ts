export interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: REPORT_TYPE;
  }[];
}

export enum REPORT_TYPE {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [],
};

data.report.push(
  {
    id: '1',
    source: 'source1',
    amount: 100,
    created_at: new Date(),
    updated_at: new Date(),
    type: REPORT_TYPE.INCOME,
  },
  {
    id: '2',
    source: 'source2',
    amount: 200,
    created_at: new Date(),
    updated_at: new Date(),
    type: REPORT_TYPE.INCOME,
  },
  {
    id: '3',
    source: 'source3',
    amount: 200,
    created_at: new Date(),
    updated_at: new Date(),
    type: REPORT_TYPE.EXPENSE,
  },
);
