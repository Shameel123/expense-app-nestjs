import { Injectable } from '@nestjs/common';
import { REPORT_TYPE, data } from './data';

@Injectable()
export class AppService {
  getAllReports(type: REPORT_TYPE): any {
    return { report: data.report.filter((el) => el.type === type) };
  }
  getReportById(type: REPORT_TYPE, id: string): any {
    return {
      report: data.report.filter((el) => el.type === type && el.id === id)[0],
    };
  }
  createReport(body: { amount: number; source: string; type: string }): any {
    const reportType =
      body.type === 'income' ? REPORT_TYPE.INCOME : REPORT_TYPE.EXPENSE;
    const newReport = {
      id: (data.report.length + 1).toString(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType,
    };
    data.report.push(newReport);
    return newReport;
  }

  updateReport(body: { amount: number; source: string }, id: string): any {
    const report = data.report.filter((el) => el.id === id)[0];
    report.amount = body.amount;
    report.source = body.source;
    report.updated_at = new Date();
    return report;
  }

  deleteReport(id: string): any {
    data.report = data.report.filter((el) => el.id !== id);
    return 'Report deleted';
  }
}
