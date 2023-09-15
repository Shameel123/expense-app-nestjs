import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Data, data, REPORT_TYPE } from './data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string): Data {
    const reportType =
      type === 'income' ? REPORT_TYPE.INCOME : REPORT_TYPE.EXPENSE;
    return { report: data.report.filter((el) => el.type === reportType) };
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string): any {
    const reportType =
      type === 'income' ? REPORT_TYPE.INCOME : REPORT_TYPE.EXPENSE;
    return {
      report: data.report.filter(
        (el) => el.type === reportType && el.id === id,
      )[0],
    };
  }

  @Post()
  createReport(@Body() body: { amount: number; source: string; type: string }) {
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

  @Put(':id')
  updateReport() {
    return 'Report updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'Report deleted';
  }
}
