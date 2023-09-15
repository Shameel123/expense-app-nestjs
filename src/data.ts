interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

const data: Data = {
  report: [],
};

// data.report.push({
//   id: '1',
//   source: 'source1',
//   amount: 100,
//   created_at: new Date(),
//   updated_at: new Date(),
//   type: ReportType.INCOME,
// });

export default data;
