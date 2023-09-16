import { Injectable } from '@nestjs/common';
import { REPORT_TYPE } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  calculateSummary() {
    const totalIncome = this.reportService
      .getAllReports(REPORT_TYPE.INCOME)
      .map((report) => report.amount)
      .reduce((a, b) => a + b, 0);
    const totalExpense = this.reportService
      .getAllReports(REPORT_TYPE.EXPENSE)
      .map((report) => report.amount)
      .reduce((a, b) => a + b, 0);
    const netIncome = totalIncome - totalExpense;

    return {
      totalIncome,
      totalExpense,
      netIncome,
    };
  }
}
