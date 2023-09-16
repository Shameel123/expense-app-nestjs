import { Injectable } from '@nestjs/common';
import { REPORT_TYPE, data } from 'src/data';
import { ReportResponseDTO } from 'src/dtos/report.dto';

@Injectable()
export class ReportService {
  getAllReports(type: REPORT_TYPE): ReportResponseDTO[] {
    return data.report
      .filter((el) => el.type === type)
      .map((report) => new ReportResponseDTO(report));
  }
  getReportById(type: REPORT_TYPE, id: string): ReportResponseDTO {
    return new ReportResponseDTO(
      data.report.filter((el) => el.type === type && el.id === id)[0],
    );
  }
  createReport(body: {
    amount: number;
    source: string;
    type: string;
  }): ReportResponseDTO {
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
    return new ReportResponseDTO(newReport);
  }

  updateReport(
    body: { amount?: number; source?: string },
    id: string,
  ): ReportResponseDTO {
    const report = data.report.filter((el) => el.id === id)[0];
    report.amount = body.amount;
    report.source = body.source;
    report.updated_at = new Date();
    return new ReportResponseDTO(report);
  }

  deleteReport(id: string): any {
    data.report = data.report.filter((el) => el.id !== id);
    return 'Report deleted';
  }
}
